//创建用户相关小仓库
import { defineStore } from 'pinia'
import { reqLogin } from '@/users'
import { type loginFormData } from '@/users/type'
let useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem(`User Token`),
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      //登录请求
      let result: any = await reqLogin(data)

      if (result.code == 200) {
        this.token = result.data.token
        localStorage.setItem(`User Token`, result.data.token)
        return 'OK'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
