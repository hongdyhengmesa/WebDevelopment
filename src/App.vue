<template>
  <div class="container">
    <h1>My Vue Router App</h1>

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
    </nav>

    <hr />

    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  font-family: Arial, Helvetica, sans-serif;
}

nav {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  color: #333;
  text-decoration: none;
}

nav a:hover {
  color: green;
}

nav a.router-link-active {
  color: green;
  font-weight: bold;
}
</style>