<template>
    <div :class="['zrx-drop-tree', dropped && 'focus']" tabindex="-1" :disabled="disabled" @focusout="onExternalOut" :clearable="canClearable" ref="container">
        <div class="wrapper" @click="toggleMenu">
            <template v-if="textShowPattern == 'tag' && selectedNodes.length">
                <div class="tag" :title="selectedNodes[0][setting.label]">
                    {{ selectedNodes[0][setting.label] }}
                    <a class="btn" @click.stop="onDelete" v-if="!disabled">
                        <i class="icon svg-icon zrx-icon-close"></i>
                    </a>
                </div>
                <div class="tag tip" :title="selectedNodes.slice(1).map(node => node[setting.label])" v-if="selectedNodes.length > 1">+{{ selectedNodes.length - 1 }}</div>
            </template>
            <template v-if="textShowPattern == 'text' && selectedNodes.length">
                <p class="text" :title="selectedNodes.map(item => item[setting.label]).join(',')">
                    {{ selectedNodes.map(item => item[setting.label]).join(',') }}
                </p>
            </template>
            <p class="placeholder" v-show="!selectedNodes.length">{{ placeholder }}</p>
        </div>
        <a class="btn btn-clear" @click="onClear" v-if="canClearable">
            <i class="icon svg-icon zrx-icon-close-round"></i>
        </a>
        <a class="btn btn-toggle" @click="toggleMenu">
            <i class="icon svg-icon zrx-icon-down-angle" :reverse-z="dropped"></i>
        </a>
        <transition name="dropDownUp" @after-enter="afterEnter">
            <div
                :class="['zrx-drop-tree-dropper', horizontal && 'horizontal', xPlacement, yPlacement]"
                tabindex="-1"
                @focusout="onDropperOut"
                :type="checkPattern"
                :style="dropperStyle"
                :placement="dropperLocation"
                v-progress="loading"
                v-show="dropped"
                ref="dropper"
            >
                <div class="search-bar" v-if="filterable">
                    <div class="inner" tabindex="-1" @focusin="filtering = true" @focusout="filtering = false">
                        <input type="text" v-model="searchword" :placeholder="filterPlaceholder" ref="searchBar" @keydown.enter="remoteSearch" />
                        <a class="btn" name="close" @click="clearSearchword" v-show="filtering && searchword"><i class="svg-icon zrx-icon-close-round"></i></a>
                        <a class="btn" name="search" v-show="!filtering || !searchword" @click="remoteSearch"><i class="svg-icon zrx-icon-magnifier"></i></a>
                    </div>
                </div>
                <div class="tree-content">
                    <el-tree
                        :accordion="accordian"
                        :check-strictly="checkStrictly"
                        :data="treeData"
                        :indent="28"
                        :node-key="setting.key"
                        :filter-node-method="filterNode"
                        :expand-on-click-node="false"
                        :check-on-click-node="multiple"
                        :show-checkbox="multiple"
                        :props="setting"
                        :load="load"
                        :lazy="lazy"
                        :default-expand-all="defaultExpandAll"
                        :default-expanded-keys="defaultExpandKeys"
                        @check-change="onCheckChange"
                        @current-change="onCurrentChange"
                        @node-click="onNodeClick"
                        ref="tree"
                    >
                        <template slot-scope="{ node, data }">
                            <slot :node="node" :data="data">
                                <div class="el-tree-node__label" :title="data[setting.label]" :ref="`label_${node.id}`" :style="`--x:${28 * (node.level - 1)}px;`">
                                    {{ data[setting.label] }}
                                </div>
                            </slot>
                        </template>
                    </el-tree>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { getMaxZIndex, setElTreeExpanded } from '../../utils/common.js'
import { cloneDeep } from 'lodash-es'
const defaultProps = {
    children: 'children',
    label: 'label',
    disabled: 'disabled',
    key: 'id'
}
const dropperBox = {
    top: 0,
    left: 0,
    width: 0
}
export default {
    name: 'zrxDropTree',
    props: {
        // 树数据
        data: {
            type: Array,
            default() {
                return []
            }
        },
        // 选中的key列表
        value: {
            type: [Array, Number, String],
            default() {
                return []
            }
        },
        // 树配置项
        props: {
            type: Object,
            default() {
                return {}
            }
        },
        // 是否多选。多选时显示勾选框
        multiple: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        // 搜索栏
        filterPlaceholder: {
            type: String,
            default: '请输入关键字搜索'
        },
        // 是否可搜索树
        filterable: {
            type: Boolean,
            default: false
        },
        // 树是否横向滚动
        horizontal: {
            type: Boolean,
            default: false
        },
        // 加载子树数据的方法，仅当 lazy 属性为 true 时生效
        load: Function,
        // 是否懒加载子节点，需与 load 方法结合使用
        lazy: Boolean,
        // 是否默认展开所有节点
        defaultExpandAll: Boolean,
        // 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法
        checkStrictly: {
            type: Boolean,
            default: true
        },
        // 将下拉框插入至body，若为否则插入至组件内。优先级低于popperAppendTo
        popperAppendToBody: {
            type: Boolean,
            default: true
        },
        // 选中标签的显示形式：tag、text
        textShowStyle: {
            type: String,
            default: 'unset'
        },
        // 输入栏是否可清空
        clearable: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        accordian: {
            // 是否每次只打开一个同级树节点展开
            type: Boolean,
            default: false
        },
        popperAppendTo: {
            // 下拉框插入的父元素,支持selector选择器和dom对象
            type: [String, Object],
            default: 'unset'
        },
        loading: {
            type: Boolean,
            default: false
        },
        // 远程搜索
        remote: {
            type: Boolean,
            default: false
        },
        // 首次点开下拉时，是否自动展开所有已选节点（同时会将第一个已选节点滚动至可视区）
        expandChecked: {
            type: Boolean,
            default: true
        },
        // 默认展开的节点的 key 的数组
        defaultExpandKeys: Array
    },
    watch: {
        vmValue: {
            handler(newv) {
                if (this.manuallyChange) {
                    return (this.manuallyChange = false)
                }
                this.setTree(newv)
            },
            deep: true
        },
        data: {
            handler() {
                this.setTreeData()
                this.$nextTick(() => {
                    this.setTree(this.vmValue)
                    this.updateDropper()
                })
            },
            deep: true
        },
        dropped(newv) {
            if (newv) {
                this.setDropper().then(() => {
                    this.attachObserver()
                    if (this.vmValue.length && this.couldExpandChecked && !this.expandingSettled) {
                        this.anchorNode = setElTreeExpanded(this.$refs.tree, this.vmValue)[0]
                        this.expandingSettled = true
                    }
                })
            } else {
                window.cancelAnimationFrame(this.io)
                this.anchorNode = null
            }
            this.$emit('visible-change', newv)
        },
        checkStrictly() {
            this.reset()
        },
        multiple(newv, oldv) {
            if (oldv && !newv && this.selectedNodes.length > 1) {
                this.reset()
            }
        },
        searchword(newv) {
            this.filterable && !this.remote && this.$refs.tree.filter(newv)
        }
    },
    data() {
        return {
            // 选中的输入栏标签数组
            selectedNodes: [],
            // 树数据
            treeData: [],
            // 下拉框展示状态
            dropped: false,
            // 搜索栏输入字符
            searchword: '',
            // 下拉框横向是与输入框左对齐还是右对齐
            xPlacement: '',
            // 下拉框竖向是在输入框之下还是之上
            yPlacement: '',
            // 自身的 input 事件是否不需要自身 watch 响应
            manuallyChange: false,
            // 下拉框的位置和尺寸
            dropperBox: { ...dropperBox },
            // 本组件插入的容器 element
            parentElement: null,
            // 下拉框定位的参照
            dropperLocation: '',
            // 当前鼠标是否聚焦于搜索栏
            filtering: false,
            // 下拉框位置监听函数
            io: null,
            // 第一次点开下拉框后要在可视区显示的树节点
            anchorNode: null,
            // 标记是否是第一次点开下拉框
            expandingSettled: false,
            // 标记 check-change 事件是否是代码触发的
            manuallyCheck: false
        }
    },
    methods: {
        // 根据选中 key 设置树和标签显示状态
        setTree(selectedKeys) {
            if (this.treeData.length) {
                if (this.$refs.tree) {
                    this.$refs.tree.setCheckedKeys(selectedKeys)
                    if (!this.multiple && selectedKeys.length) {
                        this.$refs.tree.setCurrentKey(selectedKeys[0])
                    } else {
                        this.$refs.tree.setCurrentKey(null)
                    }
                }
                this.selectedNodes = selectedKeys.map(v => {
                    return {
                        [this.setting.label]: this.findRelevantTreeTag(v, this.treeData, this.setting.key, this.setting.label, this.setting.children),
                        [this.setting.key]: v
                    }
                })
            }
            this.expandingSettled = false
        },
        // 懒加载标题回显
        setLazyEcho(nodeObj) {
            this.selectedNodes = nodeObj.map(item => {
                return {
                    [this.setting.label]: item.label,
                    [this.setting.key]: item.value
                }
            })
        },
        setTreeData() {
            this.treeData = cloneDeep(this.data)
        },
        // 设置下拉框在文档中的插入位置
        setAppendTo() {
            if (this.popperAppendTo == 'unset') {
                if (this.popperAppendToBody) {
                    this.parentElement = document.body
                } else {
                    this.dropperLocation = 'internal'
                    return (this.parentElement = this.$refs.container)
                }
            } else {
                if (this.popperAppendTo instanceof HTMLElement) {
                    this.parentElement = this.popperAppendTo
                } else {
                    const target = document.querySelector(this.popperAppendTo)
                    if (target) {
                        this.parentElement = target
                    } else {
                        this.parentElement = document.body
                    }
                }
            }
            this.dropperLocation = 'external'
            if (![...this.parentElement.children].includes(this.$refs.dropper)) {
                this.parentElement.append(this.$refs.dropper)
            }
        },
        // 在插入的位置删除下拉框
        removeAppendTo() {
            if ([...this.parentElement.children].includes(this.$refs.dropper)) {
                this.parentElement.removeChild(this.$refs.dropper)
            }
        },
        getTree() {
            return this.$refs.tree
        },
        // 展开/收起下拉框
        toggleMenu() {
            if (this.disabled) return false
            this.dropped = !this.dropped
            this.$refs.container.focus()
        },
        // 清空已选项
        reset() {
            if (this.$refs.tree) {
                this.$refs.tree.setCheckedKeys([])
                this.$refs.tree.setCurrentKey(null)
            }
            this.selectedNodes = []
            this.synchronizeValue()
        },
        // 点击清空按钮的回调
        onClear() {
            if (this.disabled) return false
            this.reset()
        },
        // 清空搜索栏内容
        clearSearchword() {
            this.searchword = ''
        },
        // 设置下拉框的页面位置
        setDropper() {
            this.yPlacement = ''
            this.xPlacement = ''
            if (this.dropperLocation == 'internal') {
                return Promise.resolve().then(() => {
                    const { left, top } = this.$refs.dropper.getBoundingClientRect()
                    if (top + this.$refs.dropper.offsetHeight >= window.innerHeight) {
                        this.yPlacement = 'y-placement-top'
                    } else {
                        this.yPlacement = 'y-placement-bottom'
                    }
                    if (left + this.$refs.dropper.offsetWidth >= window.innerWidth) {
                        this.xPlacement = 'x-placement-left'
                    } else {
                        this.xPlacement = 'x-placement-right'
                    }
                })
            } else {
                this.dropperBox = { ...dropperBox }
                const containerPos = this.$refs.container.getBoundingClientRect()
                const parentPos = this.parentElement.getBoundingClientRect()
                const y0 = containerPos.top - parentPos.top + this.parentElement.scrollTop
                const y1 = y0 + containerPos.height
                const l0 = containerPos.left - parentPos.left + this.parentElement.scrollLeft
                this.dropperBox.width = containerPos.width
                return Promise.resolve().then(() => {
                    if (containerPos.bottom + 4 + this.$refs.dropper.offsetHeight >= window.innerHeight) {
                        this.yPlacement = 'y-placement-top'
                        this.dropperBox.top = y0 - this.$refs.dropper.offsetHeight - 4
                    } else {
                        this.yPlacement = 'y-placement-bottom'
                        this.dropperBox.top = y1
                    }
                    if (containerPos.left + this.$refs.dropper.offsetWidth >= window.innerWidth) {
                        this.xPlacement = 'x-placement-left'
                        this.dropperBox.left = l0 + containerPos.width - this.$refs.dropper.offsetWidth
                    } else {
                        this.xPlacement = 'x-placement-right'
                        this.dropperBox.left = l0
                    }
                })
            }
        },
        updateDropper() {
            this.$nextTick(() => {
                this.setDropper().then(() => this.attachObserver())
            })
        },
        // 在树数据中根据 key 查找 label
        findRelevantTreeTag(value, treeData, valueKey, labelKey, childrenKey) {
            const iterator = list => {
                for (const item of list) {
                    if (item[valueKey] === value) {
                        return item[labelKey] ?? ''
                    } else if (item[childrenKey]?.length) {
                        const res = iterator(item[childrenKey])
                        if (res) return res
                    }
                }
            }
            return iterator(treeData) || this.findLabelByKey(value)
        },
        findLabelByKey(value) {
            const index = this.selectedNodes.findIndex(o => o[this.setting.key] === value)
            return index > -1 ? this.selectedNodes[index][this.setting.label] : ''
        },
        // 同步本身和父组件选中项的值
        synchronizeValue() {
            this.$emit('input', Array.isArray(this.value) ? this.selectedKeys : this.selectedKeys[0] ?? '')
            this.manuallyChange = true
        },
        // 处理下拉框失焦
        handleFocusout() {
            this.dropped = false
            this.$emit('focusout')
            this.$nextTick(() => this.$refs.container.focus())
        },
        // 等同 el-tree check-change 回调
        onCheckChange(nodeObj, isChecked, childChecked) {
            if (this.multiple) {
                this.$emit('check-change', nodeObj, isChecked, childChecked)
            } else if (isChecked) {
                if (this.manuallyCheck) {
                    this.manuallyCheck = false
                } else {
                    this.$emit('check-change', nodeObj, isChecked, childChecked)
                }
            }
            const index = this.selectedNodes.findIndex(item => item[this.setting.key] == nodeObj[this.setting.key])
            if (isChecked) {
                index == -1 &&
                    this.selectedNodes.push({
                        [this.setting.label]: nodeObj[this.setting.label],
                        [this.setting.key]: nodeObj[this.setting.key]
                    })
                // 单选时，调用 setCheckedKeys 方法。若原勾选项存在，会先触发本回调true，再触发false，所以要将第二次回调过滤
                !this.multiple && this.vmValue.length && this.vmValue[0] != nodeObj[this.setting.key] && (this.manuallyCheck = true)
            } else {
                index == -1 || this.selectedNodes.splice(index, 1)
            }
            this.synchronizeValue()
        },
        // 等同 el-tree current-change 回调
        onCurrentChange(nodeObj, node) {
            if (nodeObj[this.setting.disabled]) {
                if (!this.multiple) {
                    this.$refs.tree.setCurrentKey(this.selectedKeys[0])
                }
            } else {
                this.$emit('current-change', nodeObj, node)
            }
        },
        // 等同 el-tree node-click 回调
        onNodeClick(nodeObj, node, comp) {
            // 单选时，负责 check-change 的功能
            this.$emit('node-click', nodeObj, node, comp)
            if (!this.multiple && !nodeObj[this.setting.disabled]) {
                const isChecked = this.vmValue[0] != nodeObj[this.setting.key]
                if (isChecked) {
                    this.$refs.tree.setCheckedKeys([nodeObj[this.setting.key]])
                }
                this.handleFocusout()
                // 单选不能取消勾选
            }
        },
        // 点击标签删除选中项
        onDelete() {
            if (this.disabled) return false
            this.$refs.tree.setChecked(this.selectedNodes[0][this.setting.key], false)
            this.clearCurrentKey(this.selectedNodes[0][this.setting.key])
            this.selectedNodes.shift()
            this.synchronizeValue()
        },
        clearCurrentKey(key) {
            this.$refs.tree.getCurrentKey() == key && this.$refs.tree.setCurrentKey(null)
        },
        // 下拉框失焦回调
        onDropperOut(e) {
            if (!e.currentTarget.contains(e.relatedTarget) && !this.$refs.container.contains(e.relatedTarget) && this.dropped) {
                this.handleFocusout()
            }
        },
        // 本组件失焦回调
        onExternalOut(e) {
            if (!this.$refs.dropper.contains(e.relatedTarget) && !this.$refs.container.contains(e.relatedTarget) && this.dropped) {
                this.handleFocusout()
            }
        },
        // 对树节点进行筛选时执行的方法
        filterNode(value, data) {
            return value === '' || data[this.setting.label || 'label'].indexOf(value) != -1
        },
        // 实时计算更新下拉框位置
        attachObserver() {
            if (this.dropperLocation == 'external') {
                const containerPos = this.$refs.container.getBoundingClientRect()
                const parentPos = this.parentElement.getBoundingClientRect()
                const x0 = containerPos.left - parentPos.left + this.parentElement.scrollLeft
                const y0 = containerPos.top - parentPos.top + this.parentElement.scrollTop
                const { top: t0, left: l0 } = this.dropperBox
                const monitor = (x1, y1) => {
                    const currentContainerPos = this.$refs.container.getBoundingClientRect()
                    const currentParentPos = this.parentElement.getBoundingClientRect()
                    const x = currentContainerPos.left - currentParentPos.left + this.parentElement.scrollLeft
                    const y = currentContainerPos.top - currentParentPos.top + this.parentElement.scrollTop
                    if (x1 !== x) {
                        this.dropperBox.left = l0 + (x - x0)
                    }
                    if (y1 !== y) {
                        this.dropperBox.top = t0 + (y - y0)
                    }
                    this.io = window.requestAnimationFrame(() => monitor(x, y))
                }
                this.removeObserver()
                this.io = window.requestAnimationFrame(monitor)
            }
        },
        // 移出下拉框位置监听函数
        removeObserver() {
            if (this.io) {
                window.cancelAnimationFrame(this.io)
                this.io = null
            }
        },
        remoteSearch() {
            if (this.remote) {
                // 远程搜索，调接口
                this.$emit('remoteMethod', this.searchword)
            }
        },
        // 下拉框出现并结束过渡后回调
        afterEnter(el) {
            if (this.anchorNode) {
                const anchorDom = this.$refs[`label_${this.anchorNode.id}`]
                if (anchorDom && el.scrollTop == 0 && (anchorDom.offsetTop < el.scrollTop || anchorDom.offsetTop > el.scrollTop + el.clientHeight - anchorDom.offsetHeight)) {
                    anchorDom.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
            }
        }
    },
    mounted() {
        this.setAppendTo()
        if (!this.lazy) {
            this.setTreeData()
            this.$nextTick(() => this.setTree(this.vmValue))
        }
    },
    activated() {
        this.setAppendTo()
    },
    beforeDestroy() {
        this.removeAppendTo()
        this.removeObserver()
    },
    deactivated() {
        this.removeAppendTo()
        this.removeObserver()
    },
    computed: {
        // 默认属性与传入属性的合并
        setting() {
            return { ...defaultProps, ...this.props }
        },
        // 选中项 key 列表
        selectedKeys() {
            return this.selectedNodes.map(item => item[this.setting.key])
        },
        // 下拉框尺寸和位置
        dropperStyle() {
            if (this.dropperLocation == 'external') {
                return `top:${this.dropperBox.top}px;left:${this.dropperBox.left}px;width:${this.dropperBox.width}px;z-index:${getMaxZIndex()};`
            } else {
                return false
            }
        },
        // 选中项以标签还是文本的形式展示
        textShowPattern() {
            if (this.textShowStyle == 'unset') {
                return this.multiple ? 'tag' : 'text'
            } else {
                return this.textShowStyle
            }
        },
        canClearable() {
            return this.clearable && Boolean(this.selectedNodes.length) && !this.disabled
        },
        // 选中项的 key 的数组
        vmValue() {
            if (Array.isArray(this.value)) return this.value
            if (this.value === '') return []
            return [this.value]
        },
        couldExpandChecked() {
            return this.expandChecked && !this.defaultExpandKeys?.length && !this.defaultExpandAll
        }
    }
}
</script>
