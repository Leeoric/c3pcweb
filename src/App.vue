<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./common/scss/variable.scss";

  #app {
    color: $color-theme;
  }
</style>
