<template>
  <div class="d-flex justify-content-center mt-5">
    <div class="card" >
      <div class="card-body">
        <!-- Título del componente padre -->
        <h1 class="card-title text-center">Cambio de valor de pinia</h1>

        <!-- Mostrar el dato de la store -->
        <h2 class="card-text text-center">{{ appStore.dato }}</h2>

        <!-- Botones para cambiar el dato de la store -->
        <div class="d-flex justify-content-between mt-5">
          <button class="btn btn-primary" @click="primero">Cambiar a la Primera</button>
          <button class="btn btn-primary" @click="segundo">Cambiar a la Segunda</button>
        </div>

        <!-- Enlace para ir a la página Base -->
        <div class="d-flex justify-content-center mt-4">
          <router-link to="/" class="btn btn-primary">Ir a Base</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useAppStore} from "../stores/index.js";

// Acceder a la store de la app
const appStore = useAppStore();

// Métodos para cambiar el dato de la store
const primero = () => appStore.dato = 'Este es un ejemplo de cambio de texto en pinia';
const segundo = () => appStore.dato = 'Este puede ser el segundo ejemplo de cambio';
</script>
