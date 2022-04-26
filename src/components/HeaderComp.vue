<template>
  <header id="top">
    <a href="/">THE DESIGN SHOP</a>
    <nav>
        <ul>
            <li><a href="/">Weekly Recomendations</a></li>
            <li><a href="/cheap">Less than 30$</a></li>
            <li><a href="/add">Add</a></li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
    name: "HeaderComp"
}
</script>

<style lang="scss">
  header{
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 60px;
  }
  ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  li{
    list-style: none;
    margin-left: 20px;
  }
  a{
    text-decoration: none;
    color: #2c3e50;
  }
</style>