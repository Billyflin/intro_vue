<template>
  <form @submit.prevent="submitForm">
    <label>
      Nombre:
      <input v-model="form.name" type="text" required>
    </label>
    <label>
      Email:
      <input v-model="form.email" type="email" required>
    </label>
    <button type="submit">Enviar</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert(this.form.name + ' ' + this.form.email);
    }
  }
}
</script>
