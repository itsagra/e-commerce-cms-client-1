<template>
  <div>
    <b-modal ref="my-modal" id="modal-3">
      <template #modal-title> Add a Banner </template>
      <div class="modal-content">
        <div class="modal-body mt-3">
          <div class="md-form mb-4">
            <label data-error="wrong" data-success="right">Title:</label>
            <input
              v-model="banner.title"
              type="text"
              class="form-control validate"
              placeholder="e.g. Among Us Challenge Event Banner"
              required
            />
          </div>
          <div class="md-form mb-4">
            <label data-error="wrong" data-success="right">Image URL:</label>
            <input
              v-model="banner.image_url"
              type="text"
              class="form-control validate"
              placeholder="e.g. http://goo.gl/imposterBanner.jpg"
              required
            />
            <label class="mt-3" data-error="wrong" data-success="right">Status:</label>
            <div class="form-check">
              <input v-model="banner.status" class="form-check-input" type="radio" name="status" value="true">
              <label class="form-check-label">
                Enable
              </label>
            </div>
            <div class="form-check">
              <input v-model="banner.status" class="form-check-input" name="status" type="radio" value="false">
              <label class="form-check-label">
                Disable
              </label>
            </div>
          </div>
        </div>
      </div>
      <template #modal-footer="{cancel}">
        <b-button size="m" variant="primary" @click.prevent="addBanner">
          Add Banner
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
  name: 'AddBanner',
  data () {
    return {
      banner: {
        title: '',
        image_url: '',
        status: ''
      }
    }
  },
  methods: {
    addBanner () {
      const payload = this.banner
      this.$store.dispatch('addBanner', payload)
      this.hideModal()
      this.banner = ''
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>

<style>
</style>
