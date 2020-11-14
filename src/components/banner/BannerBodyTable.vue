<template>
    <tr class="text-center">
        <th scope="row">{{banner.id}}</th>
        <td v-if="!showFormEdit"><img :src="banner.image_url" :alt="banner.title" width="200px"></td>
        <td v-if="!showFormEdit">{{banner.title}}</td>
        <td v-if="!showFormEdit">{{status(banner.status)}}</td>
        <div v-if="!showFormEdit" class="d-flex justify-content-around mt-3" style="max-width: 60vh;">
          <button @click.prevent="showEdit" type="button" class="btn btn-outline-secondary">Edit</button>
          <button @click.prevent="deleteBanner(banner.id)" type="button" class="btn btn-outline-danger">Delete</button>
        </div>
        <td v-if="showFormEdit"><input type="text" v-model="dataBannerEdit.image_url" required><br> URL</td>
        <td v-if="showFormEdit"><input type="text" v-model="dataBannerEdit.title" required><br> Title</td>
        <td v-if="showFormEdit">
          <input type="radio" v-model="dataBannerEdit.status" :checked="dataBannerEdit.status === true" value="true">
          <label for="false">Enable</label><br>
          <input type="radio" v-model="dataBannerEdit.status" :checked="dataBannerEdit.status === false" value="false">
          <label for="true">Disable</label><br>
        </td>
        <div v-if="showFormEdit" class="d-flex justify-content-around mt-3" style="max-width: 60vh;">
          <button @click.prevent="saveEdit" type="button" class="btn btn-outline-primary mr-2 mb-3">Save Changes</button>
          <button @click.prevent="cancelEdit" type="button" class="btn btn-outline-danger mr-2 mb-3">Cancel</button>
        </div>
    </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'BannerBodyTable',
  props: ['banner'],
  data () {
    return {
      showFormEdit: false,
      dataBannerEdit: {}
    }
  },
  components: {
  },
  methods: {
    cancelEdit () {
      this.showFormEdit = false
    },
    deleteBanner (id) {
      this.$store.dispatch('deleteBanner', id)
    },
    showEdit () {
      this.dataBannerEdit = this.banner
      this.showFormEdit = true
    },
    saveEdit () {
      this.$store.dispatch('editBanner', this.dataBannerEdit)
        .then(({ data }) => {
          this.$store.dispatch('fetchBanners')
          this.showFormEdit = false
          Swal.fire({
            imageUrl: 'https://filmdaily.co/wp-content/uploads/2020/10/amongus-01-8.jpg',
            imageWidth: 400,
            imageHeight: 200,
            title: 'Banner successfully updated!',
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
    },
    status (bool) {
      if (bool) {
        return 'Enabled'
      } else {
        return 'Disabled'
      }
    }
  }
}
</script>

<style>

</style>
