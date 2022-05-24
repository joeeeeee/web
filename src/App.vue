<template>
  <div id="app">
    <h3>购物车示例1</h3>
    <p>账号：{{ email }}</p>
    <hr/>
    <ProductList/>
    <hr/>
    <ShoppingCart/>
  </div>
</template>
<script>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  computed: {
      email () {
        return 'aaa'
      }
  },
  components: { ProductList, ShoppingCart },
}
</script>


