<template>
  <div id="app">
  <m-header></m-header>
  <tab></tab>
  <keep-alive>
      <router-view></router-view>
  </keep-alive>

  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header.vue'
import Tab from 'components/tab/tab'
export default{
  components: {
    MHeader,
    Tab
  }
}
</script>

   <!-- 通过为根元素设定一个添加了scoped属性的style标签，来限制样式只作用于style标签的子元素上。
   这会限制样式只影响style标签的父元素和它所有的后代元素。 -->
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
