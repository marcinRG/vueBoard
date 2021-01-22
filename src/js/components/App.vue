<template>
  <section>
    <app-header></app-header>
    <game></game>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from './Header/AppHeader';
import AppFooter from './Footer/AppFooter';
import Game from './Game/Game';

export default {
  name: "App",
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'game': Game
  }
}
</script>


<style scoped>

</style>