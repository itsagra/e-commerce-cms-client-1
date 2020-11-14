<template>
  <div>
    <b-modal ref="my-modal" id="modal-2">
      <template #modal-title> Add a Product </template>
      <div class="modal-content">
        <div class="modal-body mt-3">
          <div class="md-form mb-4">
            <label data-error="wrong" data-success="right">Name:</label>
            <input
              v-model="product.name"
              type="text"
              class="form-control validate"
              placeholder="e.g. Among Us White Basic Tee"
              required
            />
          </div>
          <div class="md-form mb-4">
            <label data-error="wrong" data-success="right">Image URL:</label>
            <input
              v-model="product.image_url"
              type="text"
              class="form-control validate"
              placeholder="e.g. http://goo.gl/imposter.jpg"
              required
            />
          </div>
          <div class="md-form mb-4">
            <label data-error="wrong" data-success="right">Price:</label>
            <input
              v-model="product.price"
              type="text"
              class="form-control validate"
              placeholder="e.g. 100000"
              required
            />
          </div>
          <div class="md-form mb-4">
            <label data-error="wrong" data-success="right">Stock:</label>
            <input
              v-model="product.stock"
              type="text"
              class="form-control validate"
              placeholder="e.g. 50"
              required
            />
          </div>
        </div>
      </div>
      <template #modal-footer="{cancel}">
        <b-button size="m" variant="primary" @click.prevent="addProduct">
          Add Product
        </b-button>
        <b-button size="m" variant="danger" @click="cancel()">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AddForm',
  data () {
    return {
      product: {
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    addProduct () {
      const payload = this.product
      this.$store.dispatch('addProduct', payload)
      this.hideModal()
      this.product = ''
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

<style>
</style>
