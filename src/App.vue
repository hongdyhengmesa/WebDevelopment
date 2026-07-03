<template>
  <div class="container">
    <V_for/>
    <p>---------------------</p>
    <Ex1/>
    <p>--------------------- [Practice]---------------------</p>
    <Practice1/>
    <Practice2/>
  </div>
</template>

<script setup>
  import V_for from "./components/loop/V_for.vue";
  import Ex1 from "./components/loop/Ex1.vue";
  import Practice1 from "./components/loop/Practice1.vue";
  import Practice2 from "./components/loop/Practice2.vue";
</script>