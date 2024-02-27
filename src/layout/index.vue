<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <!-- 滚动条 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          :default-active="route.path"
          background-color="#001529"
          text-color="white"
          active-text-color="yellow"
        >
          <MyMenu :menuList="userStore.menuRouters"></MyMenu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_bar">
      <Tabbar></Tabbar>
    </div>
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'

import useUserStore from '@/store/moudles/users'
import Main from '@/layout/main/index.vue'

import { useRoute } from 'vue-router'

import Tabbar from '@/layout/tabbar/index.vue'
let route = useRoute()

let userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    color: white;
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-log-height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_bar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-bar-height;
    top: 0px;
    left: $base-menu-width;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-bar-height);
    background-color: yellow;
    left: $base-menu-width;
    top: $base-bar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
