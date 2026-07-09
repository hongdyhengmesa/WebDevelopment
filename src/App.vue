<template>
  <div class="container">
      <EmpParent/>
      <BookParent/>
      <CarParent/>
  </div>
</template>

<script setup>
    import EmpParent from "./components/props/EmpParent.vue";
    import BookParent from "./components/props/BookParent.vue";
    import CarParent from "./components/props/CarParent.vue";
</script>