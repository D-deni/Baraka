<script setup lang="ts">

import AdminNav from "../components/UI/AdminNav/adminNav.vue";
import {watchSyncEffect} from "vue";
import {useRoute, useRouter} from "vue-router";

const route = useRoute()
const router = useRouter()
watchSyncEffect(() => {
  if(route.path === '/admin') {
    router.push('/admin/products');
  }
})
</script>

<template>
  <div class="bg-[#F7F6F9] p-4 h-screen">
    <div class="flex">
      <admin-nav></admin-nav>
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>

</style>