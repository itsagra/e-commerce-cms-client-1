<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a @click.prevent="toHome" class="navbar-brand" href="#">
        <img src="../assets/img/title-logo.png" width="70px" height="55px" class="d-inline-block align-top rounded-circle" alt="">
      </a>
        <div class="navbar-nav">
          <div class="d-flex justify-content-start">
          <a @click.prevent="toBannerDashboard" v-if="this.$store.state.currentDashboard === 'Product'" class="nav-item nav-link mx-5" href="#">Switch to Banner Dashboard <span class="sr-only">(current)</span></a>
          <a v-if="this.$store.state.currentDashboard === 'Product'" class="nav-item nav-link mx-5" href="#" v-b-modal.modal-2>Add Product</a>
          <a @click.prevent="toProductDashboard" v-if="this.$store.state.currentDashboard === 'Banner'" class="nav-item nav-link mx-5" href="#">Switch to Product Dashboard <span class="sr-only">(current)</span></a>
          <a v-if="this.$store.state.currentDashboard === 'Banner'" class="nav-item nav-link mx-5" href="#" v-b-modal.modal-3>Add Banner</a>
          </div>
        </div>
      <button
        @click.prevent="logout"
        type="button"
        class="btn btn-outline-light d-flex justify-content-end">
        Logout
      </button>
    </nav>
    <AddForm/>
    <AddBanner/>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import AddForm from './AddForm'
import AddBanner from './banner/AddBanner'
export default {
  name: 'Navbar',
  components: {
    AddForm,
    AddBanner
  },
  methods: {
    logout () {
      Swal.fire({
        title: 'Are you sure want to logout?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logout Success!',
            'Please come back anytime!',
            'success'
          )
          localStorage.clear()
          this.$router.push('/')
        }
      })
    },
    toBannerDashboard () {
      this.$router.push({ name: 'BannerDashboard' })
    },
    toProductDashboard () {
      this.$router.push({ name: 'Dashboard' })
    },
    toHome () {
      this.$router.push({ name: 'HomePage' })
    }
  }
}
</script>

<style>

</style>
