<template>
  <div>
    <InputText v-model="text"/>
    <Button label="Senden" icon="pi pi-user" @click="send"></Button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text: null
    }
  },
  methods: {
    send() {
      this.$toast.add({
        severity: 'info',
        summary: 'Hinweis',
        detail: this.text
      });
    }
  }
}

</script>

<style>

</style>
