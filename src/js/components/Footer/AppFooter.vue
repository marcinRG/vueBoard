<template>
  <footer class="footer">
    <p>&copy; 2021</p>
  </footer>
</template>

<script>
import {linksMixin} from "../../mixins/linksMixin";

export default {
  name: "Footer",
  mixins: [linksMixin]

}
</script>

<style scoped>
.footer {
  text-align: center;
  background-color: deeppink;
  color: white;
  text-shadow: black 2px 1px 0px;
  padding: 20px;
}
</style>