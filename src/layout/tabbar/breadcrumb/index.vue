<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import useLayoutSettingStore from '@/store/moudles/setting';
let layoutSettingStore = useLayoutSettingStore()

function changeIcon(){
  layoutSettingStore.fold = !layoutSettingStore.fold
}

defineOptions({
  name: 'MyBreadcrumb'
})
</script>

<style scoped></style>
