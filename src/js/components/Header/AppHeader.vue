<template>
  <header>
    <h1 class="app-header">Moja testowa apka</h1>
    <nav>
      <ul class="header-links">
        <li v-for="link in links" class="link-wrapper">
          <router-link v-bind:to="link.route"> {{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {linksMixin} from "../../mixins/linksMixin";

export default {
  name: "Header",
  mixins: [linksMixin]
}
</script>

<style scoped>

.app-header {
  font-weight: normal;
  letter-spacing: 2px;
  text-transform: capitalize;
}

.header-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.link-wrapper {
  display: inline-block;
  margin: 0 10px;
}

</style>