<template>
  <div>
    <h1>一级路由 home {{ userStore.username }}</h1>
  </div>
  <el-button type="default" @click="click">登录</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function click() {
  router.push('/login')
}

import { onMounted } from 'vue'
import useUserStore from '@/store/moudles/users'

let userStore = useUserStore()
//首页挂载完毕发请求
onMounted(() => {
  userStore.userInfo()
})
</script>

<style scoped></style>
