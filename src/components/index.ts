import SvgIcon from './SvgIcons/index.vue'
// const x = ''
import * as ElementPlusIcons from '@element-plus/icons-vue'
import Menu from '@/layout/menu/index.vue'

const allGlobalComponents: any = { SvgIcon: SvgIcon }
export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((item) => {
      app.component(item, allGlobalComponents[item])
    })
    for (const [key, component] of Object.entries(ElementPlusIcons)) {
      app.component(key, component)
    }
    app.component('MyMenu', Menu)
  },
}
