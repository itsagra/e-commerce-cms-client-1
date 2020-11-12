<template>
    <tr class="text-center">
      <div>
        <th scope="row">{{product.id}}</th>
        <td><img :src="product.image_url" :alt="product.name" width="200px"></td>
        <td>{{product.name}}</td>
        <td>{{product.price}}</td>
        <td>{{product.stock}}</td>
        <div class="d-flex justify-content-around mt-3" style="max-width: 60vh;">
          <button type="button" class="btn btn-outline-secondary">Edit</button>
          <button @click.prevent="deleteProduct(product.id)" type="button" class="btn btn-outline-danger">Delete</button>
        </div>
      </div>
        <EditForm/>
    </tr>
</template>

<script>
import EditForm from './EditForm'
export default {
  name: 'ProductBodyTable',
  props: ['product'],
  components: {
    EditForm
  },
  methods: {
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    }
  }
}
</script>

<style>

</style>
