<template>
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight">
    <!-- //v-if优先级大于v-for -->
    <el-breadcrumb-item v-for="(item, index) in route.matched" :key="index" v-show="!item.meta.hidden" :to="item.path">
      <el-icon >
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="margin: 0px 5px;">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import useLayoutSettingStore from '@/store/moudles/setting'
import { useRoute } from 'vue-router';
let layoutSettingStore = useLayoutSettingStore()
let route = useRoute()
function changeIcon() {
  layoutSettingStore.fold = !layoutSettingStore.fold
}

defineOptions({
  name: 'MyBreadcrumb',
})
</script>

<style scoped></style>
