<template>
  <div id="app">
    <el-container>
      <el-header>
        <common-header></common-header>
      </el-header>
      <el-main>
        <transition>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </transition>
      </el-main>
      <el-footer>
        <common-footer></common-footer>
      </el-footer>
    </el-container>
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
  @import "./common/scss/index.scss";
  @import "./common/scss/variable.scss";

  #app {
    color: $color-theme;
  }
</style>
