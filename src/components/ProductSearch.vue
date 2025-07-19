<template>
  <div>
    <h2>Buscar Producto</h2>
    <input v-model="search" placeholder="Buscar por nombre..." />
    <ul>
      <li v-for="product in filtered" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { getProducts } from '@/services/api';

const search = ref('');
const products = ref([]);

onMounted(async () => {
  products.value = await getProducts();
});

const filtered = computed(() =>
  products.value.filter(p =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>