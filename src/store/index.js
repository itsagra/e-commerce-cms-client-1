import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/config'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    setProducts (state, payload) {
      state.products = payload
    },
    addNewProduct (state, payload) {
      state.products.push(payload)
    },
    deleteOne (state, id) {
      state.products = state.products.filter(el => el.id !== id)
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
                context.commit('deleteOne', id)
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
      axios.put(`/products/${payload.id}`, { headers: { token } })
    }
  },
  modules: {
  }
})
