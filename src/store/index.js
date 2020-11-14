import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/config'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    banners: [],
    currentDashboard: ''
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    addNewProduct (state, payload) {
      state.products.push(payload)
    },
    deleteOneProduct (state, id) {
      state.products = state.products.filter(el => el.id !== id)
    },
    setBanners (state, payload) {
      state.banners = payload
    },
    addNewBanner (state, payload) {
      state.banners.push(payload)
    },
    deleteOneBanner (state, id) {
      state.banners = state.banners.filter(el => el.id !== id)
    },
    setCurrentDashboard (state, dashboardName) {
      state.currentDashboard = dashboardName
    }
  },
  actions: {
    login (context, payload) {
      return axios.post('/login', payload)
    },
    fetchProducts (context) {
      const token = localStorage.token
      axios.get('/products', { headers: { token } })
        .then(({ data }) => {
          context.commit('setProducts', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addProduct (context, payload) {
      const token = localStorage.token
      axios.post('/products', payload, { headers: { token } })
        .then(({ data }) => {
          context.commit('addNewProduct', data)
          Swal.fire({
            imageUrl: 'https://filmdaily.co/wp-content/uploads/2020/10/amongus-01-8.jpg',
            imageWidth: 400,
            imageHeight: 200,
            title: 'New product successfully added!',
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
    deleteProduct (context, id) {
      Swal.fire({
        title: 'Are you sure want to delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            const token = localStorage.token
            axios.delete(`/products/${id}`, { headers: { token } })
              .then(({ data }) => {
                Swal.fire({
                  imageUrl: 'https://filmdaily.co/wp-content/uploads/2020/10/amongus-01-8.jpg',
                  imageWidth: 400,
                  imageHeight: 200,
                  title: 'Product successfully deleted!',
                  showConfirmButton: false,
                  timer: 2500
                })
                context.commit('deleteOneProduct', id)
              })
              .catch(err => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.response.data.msg
                })
              })
          }
        })
    },
    editProduct (context, payload) {
      const token = localStorage.token
      return axios.put(`/products/${payload.id}`, payload, { headers: { token } })
    },
    // Banner section
    fetchBanners (context) {
      const token = localStorage.token
      axios.get('/banners', { headers: { token } })
        .then(({ data }) => {
          context.commit('setBanners', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addBanner (context, payload) {
      const token = localStorage.token
      axios.post('/banners', payload, { headers: { token } })
        .then(({ data }) => {
          context.commit('addNewBanner', data)
          Swal.fire({
            imageUrl: 'https://filmdaily.co/wp-content/uploads/2020/10/amongus-01-8.jpg',
            imageWidth: 400,
            imageHeight: 200,
            title: 'New banner successfully added!',
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
    deleteBanner (context, id) {
      Swal.fire({
        title: 'Are you sure want to delete?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            const token = localStorage.token
            axios.delete(`/banners/${id}`, { headers: { token } })
              .then(({ data }) => {
                Swal.fire({
                  imageUrl: 'https://filmdaily.co/wp-content/uploads/2020/10/amongus-01-8.jpg',
                  imageWidth: 400,
                  imageHeight: 200,
                  title: 'Banner successfully deleted!',
                  showConfirmButton: false,
                  timer: 2500
                })
                context.commit('deleteOneBanner', id)
              })
              .catch(err => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: err.response.data.msg
                })
              })
          }
        })
    },
    editBanner (context, payload) {
      const token = localStorage.token
      return axios.put(`/banners/${payload.id}`, payload, { headers: { token } })
    }
  },
  modules: {
  }
})
