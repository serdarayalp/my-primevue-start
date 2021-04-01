<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">ImmCare</a>
      </div>
    </div>
    <div class="row">
      <div class="col-2 bg-info p-2">

      </div>
      <div class="col-10 p-2 ">
        <MyDataTable/>
      </div>
    </div>
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
