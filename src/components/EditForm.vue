<template>
    <tr class="text-center">
      <th scope="row">{{product.id}}</th>
      <td><input type="text"> ini url</td>
      <td><input type="text"> ini name</td>
      <td><input type="text"> ini price</td>
      <td><input type="text"> ini Stock</td>
      <div class="d-flex justify-content-around mt-3" style="max-width: 60vh;">
        <button type="button" class="btn btn-outline-primary">Save Changes</button>
        <button type="button" class="btn btn-outline-danger">Cancel</button>
      </div>
    </tr>
</template>

<script>
export default {
  name: 'EditForm',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  }
}
</script>

<style>

</style>
