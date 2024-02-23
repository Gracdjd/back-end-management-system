<
<template>
  <div class="logo">
    <img :src="setting.logo" v-if="setting.logoHiding" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  height: $base-menu-log-height;
  width: 100%;
  color: white;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
  p {
    font-size: $base-menu-log-font;
    margin-left: 10px;
  }
}
</style>
