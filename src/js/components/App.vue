<template>
  <section>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from './Header/AppHeader';
import AppFooter from './Footer/AppFooter';

export default {
  name: "App",
  mounted() {
    this.$store.commit('initGame');
  },
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  }
}
</script>


<style scoped>

</style>