<template>
  <div>
    <button @click="toggleVisibility">
      {{ isVisible ? 'Ocultar' : 'Mostrar' }} mensaje
    </button>
    <p v-if="isVisible">¡Hola mundo!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>
