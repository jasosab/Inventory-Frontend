<template>
  <div>
    <h2>Nuevo Producto</h2>
    <form @submit.prevent="submit">
      <input v-model="product.name" placeholder="Nombre" required />
      <input v-model="product.description" placeholder="Descripción" required />
      <button type="submit">Crear</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createProduct } from '@/services/api';

const product = ref({ name: '', description: '' });

const submit = async () => {
  await createProduct(product.value);
  product.value = { name: '', description: '' };
};
</script>