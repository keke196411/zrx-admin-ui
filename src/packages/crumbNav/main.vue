<template>
    <div class="zrx-crumb-nav">
        <template v-if="vmMenu.length < plainLength">
            <template v-for="(n, i) in vmMenu">
                <button :class="['btn', path == n.purePath && 'selected']" :key="i" @click="onClick(n)" :title="n.label">
                    {{ n.label }}
                </button>
                <i class="icon svg-icon zrx-icon-right-angle" :selected="path == n.purePath" :key="'gap_' + i" v-if="i < vmMenu.length - 1"></i>
            </template>
        </template>
        <template v-else>
            <button :class="['btn', path == vmMenu[0].purePath && 'selected']" @click="onClick(vmMenu[0])" :title="vmMenu[0].label">
                {{ vmMenu[0].label }}
            </button>
            <i class="icon svg-icon zrx-icon-right-angle"></i>
            <el-dropdown placement="bottom">
                <button class="btn"><i class="icon svg-icon zrx-icon-show-more"></i></button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :class="path == n.purePath && 'selected'" v-for="(n, i) in vmMenu.slice(1, -1)" :key="i" :title="n.label" @click.native="onClick(n)">{{
                        n.label
                    }}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <i class="icon svg-icon zrx-icon-right-angle" :selected="vmMenu.slice(1, -1).find(item => item.purePath == path)"></i>
            <button :class="['btn', path == vmMenu[vmMenu.length - 1].purePath && 'selected']" :title="vmMenu[vmMenu.length - 1].label" @click="onClick(vmMenu[vmMenu.length - 1])">
                {{ vmMenu[vmMenu.length - 1].label }}
            </button>
        </template>
    </div>
</template>

<script>
export default {
    name: 'zrxCrumbNav',
    props: {
        menu: {
            type: Array,
            default() {
                return []
            }
        },
        plainLength: {
            type: [String, Number],
            default: 4
        }
    },
    watch: {
        menu: {
            handler(newv) {
                this.vmMenu = newv.map(d => ({ ...d, purePath: d.path.match(/[^?]+(?=(\?.*|\/|(?<!\/))$)/)?.[0] ?? '' }))
            },
            deep: true,
            immediate: true
        }
    },
    data() {
        return {
            externalDone: false,
            vmMenu: []
        }
    },
    methods: {
        onClick(menuObj) {
            if (this.$route.path == menuObj.purePath) {
                return this.$emit('tabClick', menuObj)
            }
            const from = JSON.parse(JSON.stringify(this.currentMenu))
            this.$emit('beforeSkip', { to: menuObj, from, next: this.handleSkip(menuObj) })
            if (!this.externalDone) {
                this.skip(menuObj)
            } else {
                this.externalDone = false
            }
            this.$emit('tabClick', menuObj)
        },
        handleSkip(menuObj) {
            return (next = true) => {
                this.externalDone = true
                if (next) {
                    this.skip(menuObj)
                }
            }
        },
        skip(menuObj) {
            this.$router.push({ path: menuObj.path })
        }
    },
    computed: {
        path() {
            return this?.$route?.path ?? ''
        },
        currentMenu() {
            return this.vmMenu.find(m => m.purePath === this.path) ?? null
        }
    }
}
</script>
