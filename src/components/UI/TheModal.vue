<script setup lang="ts">

defineProps({
  modalClass: String,
  type: String,
})
</script>

<template>
    <div class="w-screen fixed left-0 right-0 top-0 h-screen  mx-auto flex justify-center items-center z-[110]">
      <div class="flex  justify-center" :class="modalClass">
        <div class="opacity-60 bg-black absolute left-0 top-0 w-screen h-screen" @click.stop="$emit('showModal')"></div>
        <div
            class="!bg-white rounded-lg w-7/12 max-md:w-10/12 max-sm:w-11/12 max-h-[70%] relative p-5 max-sm:p-3 overflow-y-auto"
            :class="{'!w-max' : type === 'resize', '!w-4/12 !p-0': type === 'resizeSendWindow', '!w-[400px] !p-0': type === 'resizeInfoWindow'}">
          <slot/>
        </div>
      </div>
    </div>
</template>

<style lang="scss">

</style>