// .vuepress/enhanceApp.js
import ZrxAdminUI from '../../src/index'
import contributor from './contributor'
import './styles/var.scss'
import '../../src/style/common/reset.scss'
import '../../src/style/common/component.scss'
import './styles/index.scss'

export default ({ Vue, options, router }) => {
    Vue.use(ZrxAdminUI)
    Vue.component('contributor', contributor)
}
