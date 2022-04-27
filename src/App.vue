<template>
  <main>
  <header class="top">
    <router-link to="/">THE DESIGN SHOP</router-link>
    <nav>
      <ul>
        <li><router-link to="/">Weekly Recomendations</router-link></li>
        <li><router-link to="/cheap">Less than 30$</router-link></li>
        <li><router-link to="/add">Add</router-link></li>
      </ul>
    </nav>
  </header>
  <router-view/>
  <footer>
    <p>&copy; 2018 Design Shop</p>
  </footer>
  </main>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
