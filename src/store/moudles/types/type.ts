import { type RouteRecordRaw } from 'vue-router'
export interface UserState {
  token: string | null
  menuRouters: RouteRecordRaw[]
  username: string
  avatar: string
}
