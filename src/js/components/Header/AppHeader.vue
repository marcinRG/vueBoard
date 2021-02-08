<template>
  <header class="header">
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

.header {
  min-height: 140px;
  background-color: deeppink;
}

.app-header {
  padding: 27px 0;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: 40px;
  text-align: center;
  color: white;
  text-shadow: black 4px 2px 0px;

}

.header-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.link-wrapper {
  display: inline-block;
  margin: 0 10px;
}

.link-wrapper a {
  text-decoration: none;
  color: white;
  text-shadow: black 2px 1px 0px;
}

</style>