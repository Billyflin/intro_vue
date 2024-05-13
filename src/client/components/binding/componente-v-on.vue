<template>
  <div>
    <button v-on:click="incrementarContador">
      Incrementar contador
    </button>
    <p>Contador: {{ contador }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contador: 0
    }
  },
  methods: {
    incrementarContador() {
      this.contador++;
    }
  }
}
</script>
