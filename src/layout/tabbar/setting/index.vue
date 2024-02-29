<template>
  <el-button size="small" icon="Refresh" circle @click="refresh"></el-button>
  <el-button
    size="small"
    icon="FullScreen"
    circle
    @click="fullScreen"
  ></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img src="/logo.png" style="width: 24px; height: 24px; margin: 0px 10px" />
  <el-dropdown>
    <span class="el-dropdown-link">
      <span>admin</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
defineOptions({
  name: 'MySetting',
})

import useLayoutSettingStore from '@/store/moudles/setting'
let layoutSettingStore = useLayoutSettingStore()

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
</script>

<style scoped></style>
