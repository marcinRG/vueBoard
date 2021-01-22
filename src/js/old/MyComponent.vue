<template>
  <div>
    <h3>To jest jakiś component</h3>
    <p> {{ hello }}</p>
    <p> {{ greeting() }}  </p>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      hello: 'hello world from VUE component'
    }
  },
  methods: {
    greeting() {
      return 'Pozdrowienia z komponentu Vue!'
    }
  }
}
</script>

<style scoped>

</style>