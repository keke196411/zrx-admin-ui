const path = require('path')

module.exports = {
    title: 'zrx-admin-ui-2.0',
    base: process.env.NODE_ENV === 'production' ? '/zrx-admin-ui/' : '/',
    description: '用于PC端管理系统的UI组件库',
    plugins: ['@vuepress/back-to-top'],
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/getting-started/' },
            {
                text: 'v1.0.x',
                items: [
                    { text: 'v0.5.x', link: 'http://10.10.120.148:12345/0.5.x/', target: '_blank' },
                    { text: 'v0.4.x', link: 'http://10.10.120.148:12345/0.4.x/', target: '_blank' },
                    { text: 'v0.3.x', link: 'http://10.10.120.148:12345/0.3.x/', target: '_blank' },
                    { text: 'v0.2.x', link: 'http://10.10.120.148:12345/0.2.x/', target: '_blank' },
                    { text: 'v0.1.x', link: 'http://10.10.120.148:12345/0.1.x/', target: '_blank' }
                ]
            },
            { text: 'Github', link: 'http://10.10.120.20:9099/front-end/zrx-admin-ui-2.0' }
        ],
        sidebarDepth: 2,
        displayAllHeaders: true,
        lastUpdated: 'Last Updated',
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: ['/introduce/', '/install/', '/getting-started/', '/components/theme']
            },
            {
                title: 'Element 组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/tag',
                    '/components/input',
                    '/components/inputNumber',
                    '/components/select',
                    '/components/cascader',
                    '/components/radio',
                    '/components/checkBox',
                    '/components/table',
                    '/components/switch',
                    '/components/form',
                    '/components/message',
                    '/components/tabs',
                    '/components/tree',
                    '/components/drawer',
                    '/components/dialog',
                    '/components/upload',
                    '/components/alert',
                    '/components/loading',
                    '/components/slider',
                    '/components/dropdown',
                    '/components/elTimePicker',
                    '/components/elDatePicker'
                ]
            },
            {
                title: '自定义组件',
                collapsable: false,
                children: [
                    '/components/icon',
                    '/components/timePicker',
                    '/components/datePicker',
                    '/components/dropTree',
                    '/components/status',
                    '/components/crumbNav',
                    '/components/navigation',
                    '/components/tandem',
                    '/components/pagination',
                    '/components/searchBox',
                    '/components/tabBar',
                    '/components/tableWidgets',
                    '/components/viewForm',
                    '/components/inspectTable',
                    '/components/multipleSelect',
                    '/components/progress',
                    '/components/emptyState',
                    '/components/rollNumber',
                    '/components/tabContent',
                    '/components/password',
                    '/components/steps',
                    '/components/barChart',
                    '/components/springBox',
                    '/components/score',
                    '/components/transfer'
                ]
            }
        ]
    },
    chainWebpack(config) {
        config.resolve.alias.set('vue', 'vue/dist/vue.common.js')
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@styles': path.resolve(__dirname, './styles')
            }
        }
    },
    scss: {
        additionalData: `@import "@styles/palette.scss";`
    }
}
