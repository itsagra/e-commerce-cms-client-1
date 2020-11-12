<template>
  <div class="container mt-3">
    <table class="table table-striped table-dark">
      <thead>
        <tr class="text-center">
          <th scope="col">ID</th>
          <th scope="col">Picture</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Stock</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ProductBodyTable v-for="product in products" :key="product.id" :product="product"></ProductBodyTable>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductBodyTable from './ProductBodyTable'
export default {
  name: 'ProductTable',
  components: {
    ProductBodyTable
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
