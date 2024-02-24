<template>
  <div>
    <template v-for="item in menuList" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path">
          <span>标</span>
          &nbsp;
          <template #title>{{ item.meta.title }}</template>
        </el-menu-item>
      </template>

      <!-- <el-menu-item v-else-if="item.children && item.children.length == 1 && !item.children[0].meta.hidden"  :index="item.children[0].path">
          <template #title>{{item.children[0].meta.title}}</template>
        </el-menu-item> -->

      <el-sub-menu v-else :index="item.path">
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps(['menuList'])
</script>

<style scoped lang="scss"></style>
