<template>
  <div>
    <Navbar/>
    <BannerTable/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import BannerTable from '@/components/banner/BannerTable'
export default {
  name: 'BannerDashboard',
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  components: {
    Navbar,
    BannerTable
  },
  created () {
    this.$store.dispatch('fetchBanners')
    this.$store.commit('setCurrentDashboard', 'Banner')
  }
}
</script>

<style>

</style>
