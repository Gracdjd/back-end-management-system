//创建用户相关小仓库
import { defineStore } from 'pinia'
import { reqLogin, reqUserInfo } from '@/users'
import { type loginFormData, type loginResponseData } from '@/users/type'
import { type UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN, CLEAR_TOKEN } from '@/utils/token'
import { constantRouter } from '@/routers/routers'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN('User Token'),
      menuRouters: constantRouter,
      username: '',
      avatar: '',
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
      //登录请求
      let result: loginResponseData = await reqLogin(data)

      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(`User Token`, this.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
    async userInfo() {
      let res = await reqUserInfo()
      if (res.code === 200) {
        this.username = res.data.checkUser.username
        this.avatar = res.data.checkUser.avatar
      } else {
      }
    },
    userLogout() {
      //mock接口退出登录
      this.token = ''
      this.username = ''
      this.avatar = ''
      CLEAR_TOKEN('User Token')
    },
  },
  getters: {},
})

export default useUserStore
