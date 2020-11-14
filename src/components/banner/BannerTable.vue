<template>
  <div class="container mt-3">
    <table class="table table-striped table-dark">
      <thead>
        <tr class="text-center">
          <th scope="col">ID</th>
          <th scope="col">Picture</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <BannerBodyTable v-for="banner in banners" :key="banner.id" :banner="banner"></BannerBodyTable>
      </tbody>
    </table>
  </div>
</template>

<script>
import BannerBodyTable from './BannerBodyTable'
export default {
  name: 'BannerTable',
  components: {
    BannerBodyTable
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  }
}
</script>

<style>

</style>
