<template>
    <h1>{{ price * quantity }}</h1>
    <h2>{{ name.toUpperCase() }}</h2>
</template>

<script setup>
    const price = 109;
    const quantity = 5;
    const name = "The Cambodia!!!";
</script>