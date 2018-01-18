<template>
  <div>
    最新会议
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
