<template>
  <div class="container">
    <Vif/>
    <VElse/>
    <V_else_if/>
  </div>
</template>

<script setup>
  import Vif from "./components/conditions/Vif.vue";
  import VElse from "./components/conditions/VElse.vue";
  import V_else_if from "./components/conditions/V_else_if.vue";
</script>