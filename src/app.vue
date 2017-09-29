<template>
  <div>
    <input type="text" v-model="message"></input>
    <button v-on:click="toggle">Toggle visibility</button>

    <p v-if="visible">{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      message: "Hello World",
      visible: true
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    }
  }
}
</script>

<style>
</style>