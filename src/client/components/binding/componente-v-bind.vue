<template>
  <div>
    <div v-bind:class="{ active: isActive }">
      Soy una caja
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style>
.active {
  color: green;
}
</style>
