<template>
  <div class="container">
    <UserProfile_Parent/>
    <ProductCard_Parent/>
    <StudentCard_Parent/>
  </div>
</template>

<script setup>
  import UserProfile_Parent from "./components/props/UserProfile_Parent.vue";
  import ProductCard_Parent from "./components/props/ProductCard_Parent.vue";
  import StudentCard_Parent from "./components/props/StudentCard_Parent.vue";
</script>