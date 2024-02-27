<template>
  <template v-for="item in menuList" :key="item.path">
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>

    <el-menu-item
      v-else-if="
        item.children &&
        item.children.length == 1 &&
        !item.children[0].meta.hidden
      "
      :index="item.children[0].path"
      @click="goRoute"
    >
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <template #title>
        {{ item.children[0].meta.title }}
      </template>
    </el-menu-item>

    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <MyMenu :menuList="item.children"></MyMenu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
defineProps(['menuList'])
import { useRouter } from 'vue-router'
let router = useRouter()
function goRoute(vc: any) {
  router.push(vc.index)
}
</script>

<style scoped lang="scss"></style>
