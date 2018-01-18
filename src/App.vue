<template>
  <div id="app">
    <common-header></common-header>
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
    <common-footer></common-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import CommonHeader from 'base/header/header'
  import CommonFooter from 'base/footer/footer'

  export default {
    name: 'App',
    components: {
      CommonHeader, CommonFooter
    }
  }
</script>

<style lang="scss">
  @import "./common/scss/index";
  @import "./common/scss/element-variables";

</style>
