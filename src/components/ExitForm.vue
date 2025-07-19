<template>
  <div>
    <h2>Registrar Salida</h2>
    <form @submit.prevent="submit">
      <select v-model="exit.product.id" required>
        <option disabled value="">Selecciona un producto</option>
        <option v-for="p in products" :key="p.id" :value="p.id">{{ p.name }}</option>
      </select>
      <input type="number" v-model="exit.quantity" placeholder="Cantidad" required />
      <button type="submit">Registrar salida</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getProducts, createExit } from '@/services/api';

const products = ref([]);
const exit = ref({ product: { id: '' }, quantity: 0 });

onMounted(async () => {
  products.value = await getProducts();
});

const submit = async () => {
  await createExit(exit.value);
  exit.value = { product: { id: '' }, quantity: 0 };
};
</script>