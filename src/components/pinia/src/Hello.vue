<template>
  <div>
    Pinia mini demo
    {{ store.firstName }}
    {{ store.laseName }}
    {{ store.num }}
    {{ store.getFullName }}
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<!-- 使用vue3新特性 -->
<!-- SFC中的setup特性 -->
<script setup lang="ts">
import useUserStore from "../../../store";

const store = useUserStore();

const increment = () => {
  store.increment();
};

const decrement = () => {
  store.decrement();
};
</script>

<style scoped></style>
