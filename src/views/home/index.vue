<template>
  <div>
    <h1>一级路由 home</h1>
  </div>
  <el-button type="default" @click="click">登录</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function click() {
  router.push('/login')
}
</script>

<style scoped></style>
