<template>
  <div class="container-fluid">
    <div class="row my-2">
      <button
          class="btn btn-block">
        Kategorie 1
      </button>
    </div>
    <div class="row my-2">
      <button
          class="btn btn-block">
        Kategorie 2
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      categories: ["Cat1, Cat2, Cat3"]
    }
  }
}
</script>
