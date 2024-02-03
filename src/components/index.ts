import SvgIcon from './SvgIcons/index.vue'
// const x = ''
const allGlobalComponents: any = { SvgIcon: SvgIcon }
export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((item) => {
      app.component(item, allGlobalComponents[item])
    })
  },
}
