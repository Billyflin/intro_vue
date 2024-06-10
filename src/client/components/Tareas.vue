<template>
  <div class="container mt-4">
    <h2>Lista de tareas</h2>

    <ul class="list-group" >
      <li v-for="(tarea, index) in tareas" :key="tarea.id"
          class="list-group-item d-flex justify-content-between align-items-center"
          :class="{ 'completed-task': tarea.completada }">
        <div class="form-check d-flex">
          <input type="checkbox" v-model="tarea.completada" :id="'tarea' + tarea.id" class="form-check-input" @change="actualizarTarea(index)">
          <label :for="'tarea' + tarea.id" class="form-check-label ms-2">{{ tarea.nombre }}</label>
          <p v-if="tarea.completada" class="text-success m-0 ms-2">¡Tarea completada!</p>
        </div>

        <div>
          <button @click="borrarTarea(tarea.id)" class="btn btn-danger btn-sm">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </li>
    </ul>

    <div class="input-group mt-3">
      <input type="text" v-model="nuevaTarea" @keyup.enter="crearTarea" placeholder="Nueva tarea" class="form-control">
      <button @click="crearTarea" class="btn btn-primary">Crear Tarea</button>
    </div>
  </div>
</template>

<style>
.completed-task{
  background-color: #e2f0d9 !important; /* Fondo verde claro para tareas completadas */
}

.completed-task label {
  color: #6c757d; /* Texto grisáceo para tareas completadas */
  text-decoration: line-through; /* Tachado en el texto */
}
</style>




<script>
export default {
  name: 'Tareas',
  data() {
    return {
      tareas: {},
      nuevaTarea: ''

    }
  },
  methods: {
    async actualizarTarea(index) {
      try {
        const tarea = this.tareas[index];
        await fetch(`http://localhost:3000/tareas/${tarea.id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ completada: tarea.completada }),
        });
      } catch (error) {
        console.error('Error al actualizar tarea:', error);
      }
    },

    async fetchTareas() {
      try {
        const response = await fetch('http://localhost:3000/tareas');
        this.tareas = await response.json();
        console.log('Tareas:', this.tareas);
      } catch (error) {
        console.error('Error al obtener tareas:', error);
      }
    },
    async borrarTarea(id) {
      if (confirm('¿Estás seguro de que quieres borrar esta tarea?')) { // Confirmación opcional
        try {
          await fetch(`http://localhost:3000/tareas/${id}`, { method: 'DELETE' });
          this.tareas = this.tareas.filter(t => t.id !== id); // Actualiza la lista local
        } catch (error) {
          console.error('Error al borrar tarea:', error);
        }
      }
    },
    async crearTarea() {
      const nombreNuevaTarea = this.nuevaTarea; // Obtener el nombre desde el input (que deberás agregar)

      if (nombreNuevaTarea.trim() === '') {
        // Validación simple: no permitir tareas vacías
        return;
      }

      try {
        const response = await fetch('http://localhost:3000/tareas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre: nombreNuevaTarea }),
        });

        const nuevaTarea = await response.json();
        this.tareas.push(nuevaTarea); // Agregar la nueva tarea al array
        this.nuevaTarea = ''; // Limpiar el input

        // Opcional: Mostrar un mensaje de éxito al usuario
      } catch (error) {
        console.error('Error al crear tarea:', error);
        // Opcional: Mostrar un mensaje de error al usuario
      }
    },

  },
  created() {
    this.fetchTareas();
  }
}
</script>