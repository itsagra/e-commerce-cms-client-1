<template>
  <div class="login">
    <form class="form">
      <img
        src="../assets/img/banner.png"
        alt=""
        class="banner mb-4"
        width="300px"
      />
      <div class="control" id="signIn">
        <button
          class="buttonSignIn btn btn-outline-light hvr-sweep-to-right text-info"
          aria-disabled="true" disabled
        >
          Sign In
        </button>
      </div>
      <div class="control block-cube block-input">
        <input
          v-model="login.email"
          name="Email"
          placeholder="Email"
          type="email"
        />
        <div class="bg-top">
          <div class="bg-inner"></div>
        </div>
        <div class="bg-right">
          <div class="bg-inner"></div>
        </div>
        <div class="bg">
          <div class="bg-inner"></div>
        </div>
      </div>
      <div class="control block-cube block-input">
        <input
          v-model="login.password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <div class="bg-top">
          <div class="bg-inner"></div>
        </div>
        <div class="bg-right">
          <div class="bg-inner"></div>
        </div>
        <div class="bg">
          <div class="bg-inner"></div>
        </div>
      </div>
      <button @click.prevent="adminLogin" class="btn block-cube block-cube-hover" type="submit">
        <div class="bg-top">
          <div class="bg-inner"></div>
        </div>
        <div class="bg-right">
          <div class="bg-inner"></div>
        </div>
        <div class="bg">
          <div class="bg-inner"></div>
        </div>
        <div class="text">Log In</div>
      </button>
    </form>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    adminLogin () {
      const payload = this.login
      this.$store.dispatch('login', payload)
        .then(({ data }) => {
          Toast.fire({
            icon: 'success',
            title: 'Welcome!!'
          })
          localStorage.setItem('token', data.token)
          this.$router.push({ name: 'Dashboard' })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: err.response.data.error
          })
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
