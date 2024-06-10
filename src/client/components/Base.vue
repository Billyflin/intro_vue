<template>
  <div class="container">
    <!-- Título del componente padre -->
    <h1 class="text-center my-4">Componente Padre</h1>

    <h2 v-if="mensaje">{{ mensaje }}</h2>
    <h2 v-else>No hay mensaje</h2>

    <h3>{{ appStore.dato }}</h3>

    <!-- Componente hijo con un prop y un evento personalizado -->
    <Hijo :mensaje="mensajePadre" @actualizarMensaje="mensajePadre = $event"/>

    <!-- Botón para resetear el mensaje del padre -->
    <button class="btn btn-primary mt-3" v-on:click="resetearMensaje">Resetear Mensaje</button>

    <!-- Mensajes condicionales basados en el valor de mensajePadre -->
    <p v-if="mensajePadre === 'Hola desde el padre'" class="mt-3">El mensaje está en su estado original</p>
    <p v-else class="mt-3 text-warning">El mensaje ha sido cambiado por el hijo</p>

    <router-link to="/pinia" class="btn btn-primary mt-3">Ir a Pinia</router-link>
    <router-link to="/admin" class="btn btn-primary mt-3 mx-4">Ir a Admin</router-link>
    <router-link to="/tareas" class="btn btn-primary mt-3">Ir a Tareas</router-link>
  </div>
</template>

<script>
import Hijo from './Hijo.vue';
import {useAppStore} from "../stores/index.js";
import Tareas from "./Tareas.vue";

export default {
  components: {
    Tareas,
    Hijo
  },
  name: 'Base',
  setup() {
    // Acceder a la store de la app
    const appStore = useAppStore();

    return {
      appStore
    };
  },
  data() {
    return {
      mensajePadre: 'Hola desde el padre', // Mensaje inicial del padre
      mensaje: '',
    }
  },
  methods: {
    obtenerMensaje() {
      fetch('http://localhost:3000/hello')
          .then(response => response.text())
          .then(data => {
            this.mensaje = data;
          });
    },
    resetearMensaje() {
      this.mensajePadre = 'Hola desde el padre'; // Método para resetear el mensaje del padre
    },
  },
  created() {
    this.obtenerMensaje();
  }
}
</script>
