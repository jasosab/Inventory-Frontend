<template>
  <div>
    <h2>Inventario Actual</h2>
    <ul>
      <li v-for="item in inventory" :key="item.product.id">
        {{ item.product.name }} - {{ item.quantity }} unidades - Estado: {{ item.status }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getInventory } from '@/services/api';

const inventory = ref([]);

onMounted(async () => {
  inventory.value = await getInventory();
});
</script>