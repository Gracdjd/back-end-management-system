<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <div><component :is="Component" /></div>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/store/moudles/setting'
import { watch } from 'vue'
import { ref, nextTick } from 'vue'
defineOptions({
  name: 'MyMain',
})
let flag = ref(true)
const layoutSettingStore = useLayoutSettingStore()

watch(
  () => layoutSettingStore.refsh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>

<style scoped lang="scss">
.fade-enter-active {
  transition: all 1s;
}
</style>
