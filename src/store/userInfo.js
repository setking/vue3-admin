import { defineStore } from 'pinia'
import Info from '@/config/api/info'
import router from '@/router'

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    name: '登录',
  }),
  actions: {
    upDateName(name) {
      this.name = name
    }
  }
})
export const useLogin = defineStore({
  id: 'login',
  state: () => ({
    userData: null,
  }),
  actions: {
    isLogin(data) {
      try {
        Info.login(data).then(res => {
          this.userData = data
          sessionStorage.setItem('token', res.data.token)
          router.replace({ path: '/home' })
        })
      } catch (error) {
        return error
      }

    }
  }
})
