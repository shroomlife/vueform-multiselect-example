<template>
  <div class="w-100 container">
    <div class="col-12">
      <div>
        <label>Category:</label>
        <multiselect
          mode="single"
          :searchable="true"
          valueProp="id"
          label="name"
          :createOption="true"
          v-model="selectedCategory"
          :options="categories"
          @change="handleCategoryChange"
          :onCreate="handleCategoryCreate"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Multiselect from '@vueform/multiselect';

const selectedCategory = ref<{ id: number; name: string } | null>(null);
const categories = ref([
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' }
]);

const handleCategoryChange = (selected: { id: number; name: string }) => {
  console.log('Category changed:', selected);
};

const handleCategoryCreate = (name: string) => {
  const newId = Math.max(...categories.value.map(c => c.id), 0) + 1;
  const newCategory = { id: newId, name };
  categories.value.push(newCategory);
  selectedCategory.value = newCategory;
  console.log('New category created:', newCategory);
};
</script>
