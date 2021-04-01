<template>
  <div>
    <Toast/>
<!--    <MyInputText/>-->
<!--    <MyRadioButton/>-->
    <MyDataTable/>
  </div>
</template>

<script>

import ProductService from './service/ProductService';

// import MyRadioButton from "@/components/MyRadioButton";
// import MyInputText from "@/components/MyInputText";
import MyDataTable from "@/components/MyDataTable";

export default {
  data() {
    return {
      city: null,
      productService: null,
      products: null
    }
  },
  created() {
    this.productService = new ProductService();
  },
  mounted() {
    this.productService.getProductsSmall().then(data => this.products = data);
  },
  components: {
    // MyRadioButton,
    // MyInputText,
    MyDataTable
  },
  methods: {}
}

</script>

<style>

</style>
