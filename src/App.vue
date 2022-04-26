<template>
  <div>
    <HeaderComp />
    <div>
      <ProductComp />
    </div>
    <FooterComp />
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import FooterComp from './components/FooterComp.vue'
import ProductComp from './components/ProductComp.vue'

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
    ProductComp
  }
}
</script>

<style lang="scss">

</style>
