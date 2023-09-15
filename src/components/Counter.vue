<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
const increment = () => count.value++
const decrement = () => count.value--
</script>
<template>
  <div>
    <button class="border px-4 py-2 text-xl text-white" @click="decrement">
      <span> - </span>
    </button>
    <span class="text-yellow-300 text-xl mx-4">{{ count }}</span>
    <button class="border px-4 py-2 text-xl text-white" @click="increment">
      <span> + </span>
    </button>
  </div>
</template>
