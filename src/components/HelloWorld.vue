<template>
  <div>{{ store.$state.counter }}</div>
  <button @click="btnClick">+</button>
  <button @click="btnReset">+</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../store/index";
export default defineComponent({
  setup() {
    const store = useStore();

    const btnClick = () => {store.counter ++ }
    const btnReset = () => {store.$reset()}
    return {
      store,
      btnClick,
      btnReset
    };
  },
});
</script>

<style scoped></style>
