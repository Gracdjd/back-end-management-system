<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
    </div>
    <div class="layout_bar">
      
    </div>
    <div class="layout_main">
      <p style="height: 10000px;">111</p>
    </div>
  </div>


</template>

<script setup lang="ts">
import Logo from './logo/index.vue'

</script>

<style scoped lang="scss">
.layout_container{
  width:100%;
  height: 100vh;
  background-color: red;
  .layout_slider{
    width:$base-menu-width;
    height:100vh;
    background-color:$base-menu-background;
  }
  .layout_bar{
    position:fixed;
    width:calc(100% - $base-menu-width);
    height:$base-bar-height;
    top: 0px;
    left: $base-menu-width
  }
  .layout_main{
    position:absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-bar-height);
    background-color: yellow;
    left:$base-menu-width;
    top: $base-bar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>