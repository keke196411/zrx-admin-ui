<template>
    <div class="search-box-demo">
        <zrx-search-box @transitionend="onTransitionend" @onEnter="onSearch">
            <template slot="inputer">
                <div class="zrx-tandem-input">
                    <label class="label">是否启用</label>
                    <el-select v-model="formData.enable" placeholder="请选择">
                        <el-option :value="1" label="是"></el-option>
                        <el-option :value="0" label="否"></el-option>
                    </el-select>
                </div>
                <div class="zrx-tandem-input">
                    <label class="label">日期范围</label>
                    <zrx-date-time-picker
                        v-model="formData.timetimeRange"
                        type="datetimerange"
                        format="yyyy-MM-dd HH:mm:ss"
                        rangeSeparator="-"
                        :clearable="false"
                        v-on:input="inputFunc"
                        v-on:change="changeFunc"
                        v-on:blur="blurFunc"
                        v-on:focus="focusFunc"
                    ></zrx-date-time-picker>
                </div>
                <div class="zrx-tandem-input">
                    <label class="label">{{ multipleConf.title }}</label>
                    <zrx-multiple-select popper-append-to-body v-model="formData.multiplePath" :option="multipleConf.option"></zrx-multiple-select>
                </div>
                <div class="zrx-tandem-input">
                    <label class="label">所属部门</label>
                    <zrx-drop-tree :data="treeData" popper-append-to-body :props="{ label: 'name' }" v-model="formData.tree" show-checkbox></zrx-drop-tree>
                </div>
                <div class="zrx-tandem-input">
                    <label class="label">{{ cascaderConf.title }}</label>
                    <el-cascader v-model="formData.cascaderPath" :options="cascaderConf.option" :props="cascaderConf.props"></el-cascader>
                </div>
                <div class="zrx-tandem-input">
                    <label class="label">页数</label>
                    <el-input placeholder="请输入" v-model="formData.pageNum"></el-input>
                </div>
            </template>
            <template slot="btn">
                <el-button type="primary" @click="onSearch">查询</el-button>
                <el-button>重置</el-button>
            </template>
        </zrx-search-box>
    </div>
</template>

<script>
export default {
    name: 'searchBoxDemo',
    data() {
        return {
            treeData: [
                {
                    id: '0',
                    parentId: null,
                    children: [
                        {
                            id: '5bbfb0fb33e6432aa499f5ddb801163b',
                            parentId: '0',
                            children: [],
                            name: '一级节点1',
                            sort: 0,
                            disabled: true
                        },
                        {
                            id: 'd966b79460be4734a78d6f53d4037e84',
                            parentId: '0',
                            children: [],
                            name: '一级节点2',
                            sort: 2
                        },
                        {
                            id: 'b169cbd13e154d53b199afb1dceeaeee',
                            parentId: '0',
                            children: [],
                            name: '一级节点3',
                            sort: 3
                        },
                        {
                            id: 'aa946ffcf7bb4b03821dee3c75aa4ea2',
                            parentId: '0',
                            children: [
                                {
                                    id: 'd7f354df24bb4166be3c09b20561ad8e',
                                    parentId: 'aa946ffcf7bb4b03821dee3c75aa4ea2',
                                    children: [
                                        {
                                            id: '11112f1d487945a097a0ba5ff1f21273',
                                            parentId: 'd7f354df24bb4166be3c09b20561ad8e',
                                            children: [],
                                            name: '三级节点1',
                                            sort: 0
                                        }
                                    ],
                                    name: '二级节点1',
                                    sort: 0
                                }
                            ],
                            name: '一级节点4',
                            sort: 4
                        }
                    ],
                    name: '全部',
                    sort: 0
                }
            ],
            cascaderConf: {
                option: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则',
                                children: [
                                    {
                                        value: 'yizhi',
                                        label: '一致'
                                    },
                                    {
                                        value: 'fankui',
                                        label: '反馈'
                                    },
                                    {
                                        value: 'xiaolv',
                                        label: '效率'
                                    },
                                    {
                                        value: 'kekong',
                                        label: '可控'
                                    }
                                ]
                            },
                            {
                                value: 'daohang',
                                label: '导航',
                                children: [
                                    {
                                        value: 'cexiangdaohang',
                                        label: '侧向导航'
                                    },
                                    {
                                        value: 'dingbudaohang',
                                        label: '顶部导航'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'zujian',
                        label: '组件',
                        children: [
                            {
                                value: 'basic',
                                label: 'Basic',
                                children: [
                                    {
                                        value: 'layout',
                                        label: 'Layout 布局'
                                    },
                                    {
                                        value: 'color',
                                        label: 'Color 色彩'
                                    },
                                    {
                                        value: 'typography',
                                        label: 'Typography 字体'
                                    },
                                    {
                                        value: 'icon',
                                        label: 'Icon 图标'
                                    },
                                    {
                                        value: 'button',
                                        label: 'Button 按钮'
                                    }
                                ]
                            },
                            {
                                value: 'form',
                                label: 'Form',
                                children: [
                                    {
                                        value: 'radio',
                                        label: 'Radio 单选框'
                                    },
                                    {
                                        value: 'checkbox',
                                        label: 'Checkbox 多选框'
                                    },
                                    {
                                        value: 'input',
                                        label: 'Input 输入框'
                                    },
                                    {
                                        value: 'input-number',
                                        label: 'InputNumber 计数器'
                                    },
                                    {
                                        value: 'select',
                                        label: 'Select 选择器'
                                    },
                                    {
                                        value: 'cascader',
                                        label: 'Cascader 级联选择器'
                                    },
                                    {
                                        value: 'switch',
                                        label: 'Switch 开关'
                                    },
                                    {
                                        value: 'slider',
                                        label: 'Slider 滑块'
                                    },
                                    {
                                        value: 'time-picker',
                                        label: 'TimePicker 时间选择器'
                                    },
                                    {
                                        value: 'date-picker',
                                        label: 'DatePicker 日期选择器'
                                    },
                                    {
                                        value: 'datetime-picker',
                                        label: 'DateTimePicker 日期时间选择器'
                                    },
                                    {
                                        value: 'upload',
                                        label: 'Upload 上传'
                                    },
                                    {
                                        value: 'rate',
                                        label: 'Rate 评分'
                                    },
                                    {
                                        value: 'form',
                                        label: 'Form 表单'
                                    }
                                ]
                            },
                            {
                                value: 'data',
                                label: 'Data',
                                children: [
                                    {
                                        value: 'table',
                                        label: 'Table 表格'
                                    },
                                    {
                                        value: 'tag',
                                        label: 'Tag 标签'
                                    },
                                    {
                                        value: 'progress',
                                        label: 'Progress 进度条'
                                    },
                                    {
                                        value: 'tree',
                                        label: 'Tree 树形控件'
                                    },
                                    {
                                        value: 'pagination',
                                        label: 'Pagination 分页'
                                    },
                                    {
                                        value: 'badge',
                                        label: 'Badge 标记'
                                    }
                                ]
                            },
                            {
                                value: 'notice',
                                label: 'Notice',
                                children: [
                                    {
                                        value: 'alert',
                                        label: 'Alert 警告'
                                    },
                                    {
                                        value: 'loading',
                                        label: 'Loading 加载'
                                    },
                                    {
                                        value: 'message',
                                        label: 'Message 消息提示'
                                    },
                                    {
                                        value: 'message-box',
                                        label: 'MessageBox 弹框'
                                    },
                                    {
                                        value: 'notification',
                                        label: 'Notification 通知'
                                    }
                                ]
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'menu',
                                        label: 'NavMenu 导航菜单'
                                    },
                                    {
                                        value: 'tabs',
                                        label: 'Tabs 标签页'
                                    },
                                    {
                                        value: 'breadcrumb',
                                        label: 'Breadcrumb 面包屑'
                                    },
                                    {
                                        value: 'dropdown',
                                        label: 'Dropdown 下拉菜单'
                                    },
                                    {
                                        value: 'steps',
                                        label: 'Steps 步骤条'
                                    }
                                ]
                            },
                            {
                                value: 'others',
                                label: 'Others',
                                children: [
                                    {
                                        value: 'dialog',
                                        label: 'Dialog 对话框'
                                    },
                                    {
                                        value: 'tooltip',
                                        label: 'Tooltip 文字提示'
                                    },
                                    {
                                        value: 'popover',
                                        label: 'Popover 弹出框'
                                    },
                                    {
                                        value: 'card',
                                        label: 'Card 卡片'
                                    },
                                    {
                                        value: 'carousel',
                                        label: 'Carousel 走马灯'
                                    },
                                    {
                                        value: 'collapse',
                                        label: 'Collapse 折叠面板'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'ziyuan',
                        label: '资源',
                        children: [
                            {
                                value: 'axure',
                                label: 'Axure Components'
                            },
                            {
                                value: 'sketch',
                                label: 'Sketch Templates'
                            },
                            {
                                value: 'jiaohu',
                                label: '组件交互文档'
                            }
                        ]
                    }
                ],
                title: '级联展示',
                props: {
                    label: 'label',
                    value: 'value',
                    children: 'children'
                }
            },
            multipleConf: {
                title: '下拉多选',
                option: [
                    {
                        label: '下拉选项1',
                        value: 1
                    },
                    {
                        label: '下拉选项2',
                        value: 2
                    },
                    {
                        label: '下拉选项3',
                        value: 3
                    },
                    {
                        label: '下拉选项4',
                        value: 4
                    },
                    {
                        label: '下拉选项5',
                        value: 5
                    }
                ]
            },
            formData: {
                tabFormName: '',
                formGroupId: '',
                enable: '',
                sortField: '',
                pageNum: 1,
                sortState: '',
                pageSize: 10,
                tree: [],
                timetimeRange: [],
                cascaderPath: [],
                multiplePath: [5, 3]
            }
        }
    },
    methods: {
        inputFunc: function () {
            console.log('inputFunc')
        },
        changeFunc: function () {
            console.log('changeFunc')
        },
        blurFunc: function () {
            console.log('blurFunc')
        },
        focusFunc: function () {
            console.log('focusFunc')
        },
        onTransitionend() {
            console.log(arguments)
        },
        onSearch() {
            console.log('search')
        }
    }
}
</script>

<style scoped lang="scss">
.zrx-search-box {
    margin: 24px 0;
}
</style>
