<template>
    <div class="container">
        <UserParent/>
        <CounterParent/>
    </div>
</template>

<script setup>
    import UserParent from "./components/emits/UserParent.vue";
    import CounterParent from "./components/emits/CounterParent.vue";
</script>