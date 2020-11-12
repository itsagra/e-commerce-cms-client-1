<template>
  <div>
    <Navbar/>
    <ProductTable/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ProductTable from '@/components/ProductTable'
export default {
  name: 'Dashboard',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    Navbar,
    ProductTable
  },
  created () {
    this.$store.dispatch('fetchProducts')
  }
}
</script>

<style>

</style>
