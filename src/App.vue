<template>
  <div>
    <h1>📦 Inventario de Productos Perecederos</h1>
    <ProductForm />
    <EntryForm />
    <ExitForm />
    <InventoryList />
    <ProductSearch />
  </div>
</template>

<script setup lang="ts">
import ProductForm from './components/ProductForm.vue';
import EntryForm from './components/EntryForm.vue';
import ExitForm from './components/ExitForm.vue';
import InventoryList from './components/InventoryList.vue';
import ProductSearch from './components/ProductSearch.vue';
</script>