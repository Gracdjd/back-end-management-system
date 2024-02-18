//创建用户相关小仓库
import { defineStore } from 'pinia'
import { reqLogin } from '@/users'
import { type loginFormData, type loginResponseData } from '@/users/type'
import { type UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN('User Token'),
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
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
  },
  getters: {},
})

export default useUserStore
