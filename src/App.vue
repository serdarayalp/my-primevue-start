<template>
  <div>
    <div class="row">
      <div class="col-12">
        <MyMenue />
      </div>
    </div>
    <div class="row">
      <div class="col-2 bg-info p-2">

      </div>
      <div class="col-10 p-2 ">

        <Panel header="Header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </Panel>

        <br/>

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
import MyMenue from "@/components/MyMenue";

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
    MyDataTable,
    MyMenue
  },
  methods: {}
}

</script>

<style>

</style>
