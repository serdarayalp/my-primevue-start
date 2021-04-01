<template>

  <div v-for="category of categories" :key="category.key" class="p-field-radiobutton">
    <RadioButton :id="category.key"
                 name="category"
                 :value="category"
                 v-model="selectedCategory"
                 :disabled="category.key === 'R'"/>
    <label :for="category.key">{{ category.name }}</label>
  </div>

</template>

<script>

export default {
  data() {
    return {
      categories: [
        {name: 'Accounting', key: 'A'},
        {name: 'Marketing', key: 'M'},
        {name: 'Production', key: 'P'},
        {name: 'Research', key: 'R'}
      ],
      selectedCategory: null,
    }
  },
  created() {
    this.selectedCategory = this.categories[1];
  }
}

</script>

<style>

</style>
