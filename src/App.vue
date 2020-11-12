<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created () {
    if (!localStorage.token) {
      this.$router.push({ name: 'HomePage' })
    } else {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>
<style>
</style>
