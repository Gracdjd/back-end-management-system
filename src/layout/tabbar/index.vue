<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="tabbar-right">
      <Setting></Setting>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
defineOptions({
  name: 'MyTabber',
})
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(
    to right,
    rgb(245, 237, 237),
    rgb(231, 226, 226),
    rgb(139, 114, 114)
  );
  .tabbar-left {
    display: flex;

    align-items: center;
    margin-left: 20px;
  }
  .tabbar-right {
    display: flex;

    align-items: center;
  }
}
</style>
