<template>
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/title-logo.png" width="70px" height="55px" class="d-inline-block align-top rounded-circle" alt="">
      </a>
        <div class="navbar-nav">
          <div class="d-flex justify-content-start">
          <a class="nav-item nav-link mx-1" href="#">Dashboard <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link mx-1" href="#" v-b-modal.modal-2>Add Product</a>
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
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import AddForm from './AddForm'
export default {
  name: 'Navbar',
  components: {
    AddForm
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
          this.$router.push({ name: 'HomePage' })
        }
      })
    }
  }
}
</script>

<style>

</style>
