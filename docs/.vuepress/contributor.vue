<template>
    <div class="m-contributor">
        <p>维护者</p>
        <p>贡献者</p>
        <p>
            <img :src="n.url" alt="" v-for="(n, i) in group1" :key="i" />
        </p>
        <p>
            <img :src="n.url" alt="" v-for="(n, i) in group2" :key="i" />
        </p>
    </div>
</template>

<script>
import gbb from '../../public/gbb.png'
import zxl from '../../public/zxl.png'
import agua from '../../public/agua.png'
import cmd from '../../public/cmd.png'
import zz from '../../public/zz.png'
import zdl from '../../public/zdl.png'
import zw from '../../public/zw.png'
import wt from '../../public/wt.png'
import lcb from '../../public/lcb.png'
import rp from '../../public/rp.png'
const gross = { gbb, zxl, agua, cmd, zz, zdl, zw, wt, lcb, rp }
export default {
    name: 'contributor',
    props: {
        maintainer: {
            type: Array,
            default() {
                return []
            }
        },
        members: {
            type: Array,
            default() {
                return []
            }
        }
    },
    computed: {
        group1() {
            return this.maintainer
                .filter(item => item in gross)
                .map(item => {
                    return {
                        url: gross[item]
                    }
                })
        },
        group2() {
            return this.members
                .filter(item => item in gross)
                .map(item => {
                    return {
                        url: gross[item]
                    }
                })
        }
    }
}
</script>

<style lang="scss" scoped>
.m-contributor {
    display: grid;
    grid-template-columns: minmax(0, max-content) auto;
    grid-row-gap: 24px;
    grid-column-gap: 40px;
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid #dcdfe8;
    > p {
        margin: 0;
        line-height: 32px;
        font-size: 24px;
    }
    img {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        &:not(:first-of-type) {
            margin-left: 8px;
        }
    }
}
</style>
