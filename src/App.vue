<template>
    <div class="container">
        <EmpParent/>
        <BookParent/>
        <CarParent/>
        <FoodParent/>
        <MovieParent/>
    </div>
</template>

<script setup>
    import EmpParent from "./components/props/EmpParent.vue";
    import BookParent from "./components/props/BookParent.vue";
    import CarParent from "./components/props/CarParent.vue";
    import FoodParent from "./components/props/FoodParent.vue";
    import MovieParent from "./components/props/MovieParent.vue";
</script>