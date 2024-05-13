<script>
export default {
  name: "componente-v-show",
  data() {
    return {
      mostrarMensaje: false
    }
  }
}
</script>

<template>
  <div>
    <h1>Componente v-show</h1>
    <p v-show="true">Este párrafo siempre se muestra</p>
    <p v-show="false">Este párrafo nunca se muestra</p>
    <button @click="mostrarMensaje = !mostrarMensaje">Mostrar/Ocultar mensaje</button>
    <p v-show="mostrarMensaje">¡Hola, mundo!</p>
  </div>
</template>