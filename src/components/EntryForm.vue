<template>
  <div>
    <h2>Registrar Entrada</h2>
    <form @submit.prevent="submit">
      <select v-model="entry.product.id" required>
        <option disabled value="">Selecciona un producto</option>
        <option v-for="p in products" :key="p.id" :value="p.id">{{ p.name }}</option>
      </select>
      <input type="number" v-model="entry.quantity" placeholder="Cantidad" required />
      <input type="date" v-model="entry.expirationDate" required />
      <button type="submit">Registrar entrada</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getProducts, createEntry } from '@/services/api';

const products = ref([]);
const entry = ref({ product: { id: '' }, quantity: 0, expirationDate: '' });

onMounted(async () => {
  products.value = await getProducts();
});

const submit = async () => {
  await createEntry(entry.value);
  entry.value = { product: { id: '' }, quantity: 0, expirationDate: '' };
};
</script>