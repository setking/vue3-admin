<template>
  <div class="content">
    <SideBar />
    <div>
      <Header />
    </div>
  </div>
</template>
<script setup>
import Info from '@/config/api/info'
import Header from '@/components/header/index.vue'
import SideBar from '@/components/sidebar/index.vue'


function getUserInfo () {
  Info.getInfo().then(res => {
    console.log(res)
  })
}

</script>
<style lang="scss" scoped>
</style>
