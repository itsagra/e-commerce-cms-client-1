<template>
    <tr class="text-center">
        <th scope="row">{{product.id}}</th>
        <td v-if="!showFormEdit"><img :src="product.image_url" :alt="product.name" width="200px"></td>
        <td v-if="!showFormEdit">{{product.name}}</td>
        <td v-if="!showFormEdit">Rp. {{rpFormat(product.price)}}</td>
        <td v-if="!showFormEdit">{{product.stock}}</td>
        <div v-if="!showFormEdit" class="d-flex justify-content-around mt-3" style="max-width: 60vh;">
          <button @click.prevent="showEdit" type="button" class="btn btn-outline-secondary">Edit</button>
          <button @click.prevent="deleteProduct(product.id)" type="button" class="btn btn-outline-danger">Delete</button>
        </div>
        <td v-if="showFormEdit"><input type="text" v-model="dataProductEdit.image_url" required><br> URL</td>
        <td v-if="showFormEdit"><input type="text" v-model="dataProductEdit.name" required><br> Name</td>
        <td v-if="showFormEdit"><input type="text" v-model="dataProductEdit.price" required><br> Price</td>
        <td v-if="showFormEdit"><input type="text" v-model="dataProductEdit.stock" required><br> Stock</td>
        <div v-if="showFormEdit" class="d-flex justify-content-around mt-3" style="max-width: 60vh;">
          <button @click.prevent="saveEdit" type="button" class="btn btn-outline-primary mr-2 mb-3">Save Changes</button>
          <button @click.prevent="cancelEdit" type="button" class="btn btn-outline-danger mr-2 mb-3">Cancel</button>
        </div>
    </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'ProductBodyTable',
  props: ['product'],
  data () {
    return {
      showFormEdit: false,
      dataProductEdit: {}
    }
  },
  components: {
  },
  methods: {
    rpFormat (num) {
      return new Intl.NumberFormat('id').format(num)
    },
    cancelEdit () {
      this.showFormEdit = false
    },
    deleteProduct (id) {
      this.$store.dispatch('deleteProduct', id)
    },
    showEdit () {
      this.dataProductEdit = this.product
      this.showFormEdit = true
    },
    saveEdit () {
      this.$store.dispatch('editProduct', this.dataProductEdit)
        .then(({ data }) => {
          this.$store.dispatch('fetchProducts')
          this.showFormEdit = false
          Swal.fire({
            imageUrl: 'https://filmdaily.co/wp-content/uploads/2020/10/amongus-01-8.jpg',
            imageWidth: 400,
            imageHeight: 200,
            title: 'Product successfully updated!',
            showConfirmButton: false,
            timer: 2500
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.response.data.msg
          })
        })
    }
  }
}
</script>

<style>

</style>
