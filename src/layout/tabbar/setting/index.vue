<template>
  <el-button size="small" icon="Refresh" circle @click="refresh"></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img
    :src="userStore.avatar"
    style="width: 24px; height: 24px; margin: 0px 10px; border-radius: 50%"
  />
  <el-dropdown>
    <span class="el-dropdown-link">
      <span>{{ userStore.username }}</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MySetting',
})

import useLayoutSettingStore from '@/store/moudles/setting'
import useUserStore from '@/store/moudles/users'
import { useRoute, useRouter } from 'vue-router'

let layoutSettingStore = useLayoutSettingStore()
let userStore = useUserStore()
let router = useRouter()
let route = useRoute()
const refresh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}

const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

let logout = () => {
  //向服务器发送token无效
  //仓库中关于用户相关数据清空掉
  //3跳转到登录页面
  userStore.userLogout()
  router.push({ path: '/login', query: { redirect: route.path } })
}
</script>

<style scoped></style>
