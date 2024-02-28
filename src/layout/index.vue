<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{fold: layoutSettingStore.fold}">
      <Logo></Logo>
      <!-- 滚动条 -->
      <el-scrollbar class="scrollbar" >
        <!-- 菜单组件 -->
        <el-menu
          :default-active="route.path"
          background-color="#001529"
          text-color="white"
          active-text-color="yellow"
          :collapse="layoutSettingStore.fold"
        >
          <MyMenu :menuList="userStore.menuRouters"></MyMenu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_bar" :class="{fold: layoutSettingStore.fold}">
      <Tabbar></Tabbar>
    </div>
    <div class="layout_main" :class="{fold: layoutSettingStore.fold}">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/index.vue'

import useUserStore from '@/store/moudles/users'
import Main from '@/layout/main/index.vue'

import { useRoute } from 'vue-router'
import MyMenu from '@/layout/menu/index.vue'
import Tabbar from '@/layout/tabbar/index.vue'
import useLayoutSettingStore from '@/store/moudles/setting'
let route = useRoute()

let userStore = useUserStore()
let layoutSettingStore =useLayoutSettingStore()

defineOptions({
  name: 'MyLayout'
})
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
    transition: all 0.3s;
    &.fold{
      width: $base-menu-min-width;
    }
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
    transition: all 0.3s;
    &.fold{
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width
    }
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
    transition: all 0.3s;
    &.fold{
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width
    }
  }
}
</style>
