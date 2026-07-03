<template>
    <p v-for="fruit in fruits" :key="fruit">{{ fruit }}</p>
    <h6 v-for="number in numbers" :key="number">{{ number }}</h6>
    <h3 v-for="student in students" :key="student">{{ student }}</h3>
    <h5 v-for="langauge in langauges" :key="langauge">{{ langauge }}</h5>
</template>

<script setup>
    const fruits = [
        "Banana",
        "Mango",
        "Potato"
    ]

    const numbers = [
        10,
        20,
        30,
        40,
        50,
    ]

    const students = [
        "John",
        "Kimmy",
        "Lalo",
        "Phenh",
        "Noly"
    ]

    const langauges = [
        "Html",
        "Javascript",
        "Css",
        "VueJs",
        "NestJs"
    ]

</script>