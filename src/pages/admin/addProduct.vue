<script setup lang="ts">
import {useRouter} from "vue-router";
import TheBlock from "../../components/admin/UI/TheBlock.vue";

const router = useRouter()
</script>

<template>
  <div class="px-[32px]">
    <div class="flex items-center max-sm:flex-wrap gap-x-6 mt-4 max-sm:px-4">
      <button class="flex items-center gap-x-2 px-4 py-2 rounded-lg bg-white" @click="router.go(-1)">
      <span>
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_189_5904" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="24">
            <rect y="0.570312" width="22.8571" height="22.8571" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_189_5904)">
            <path d="M7.02201 12.714L11.9451 17.6371C12.0867 17.7787 12.1566 17.9445 12.1548 18.1343C12.153 18.3242 12.0782 18.493 11.9304 18.6407C11.7827 18.7787 11.6154 18.8501 11.4286 18.855C11.2418 18.8599 11.0746 18.7885 10.9268 18.6407L4.88837 12.6023C4.79924 12.5132 4.73636 12.4191 4.69973 12.3202C4.66309 12.2213 4.64478 12.1145 4.64478 11.9997C4.64478 11.885 4.66309 11.7781 4.69973 11.6792C4.73636 11.5803 4.79924 11.4863 4.88837 11.3972L10.9268 5.35873C11.0587 5.22686 11.222 5.1594 11.4167 5.15635C11.6115 5.1533 11.7827 5.22076 11.9304 5.35873C12.0782 5.50646 12.1521 5.67617 12.1521 5.86787C12.1521 6.05957 12.0782 6.22929 11.9304 6.37702L7.02201 11.2855L17.8572 11.2855C18.0599 11.2855 18.2296 11.3538 18.3663 11.4906C18.5031 11.6273 18.5715 11.797 18.5715 11.9997C18.5715 12.2024 18.5031 12.3721 18.3663 12.5089C18.2296 12.6456 18.0599 12.714 17.8572 12.714L7.02201 12.714Z" fill="#FE5000"/>
          </g>
        </svg>
      </span>
        <span>{{$t('Назад')}}</span>
      </button>
      <div class="flex gap-x-2 max-sm:py-4">
        <RouterLink class="flex gap-x-2" to="/admin/products" >
          <p class="text-gray-300"> {{$t('Продукты')}} </p>
        </RouterLink>
        <span>/</span>
        <RouterLink class="flex gap-x-2" to="" >
          <p class="text-to"> {{$t('Добавление товара')}} </p>
        </RouterLink>
      </div>
    </div>
    <div class="mt-[40px]">
     <TheBlock>
       <template #adminTitle>
         {{$t('Добавление товара')}}
       </template>
     </TheBlock>
    </div>
  </div>
</template>

<style scoped>

</style>