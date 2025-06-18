<template>
  <div class="container">
    <h1>Constellations</h1>
    <h2>Liste des constellations</h2>

<div class="grid">
      <div v-for="item in constellations" :key="item.id" class="card">
        <router-link :to="`/constellation/${item.id}`">
  <img :src="item.image" />
  <h2>{{ item.title }}</h2>
</router-link>

      </div>
    </div>
    <div v-if="constellations.length === 0" class="loading">
      Chargement des constellations...
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const constellations = ref([])

onMounted(async () => {
  try {
    const response = await fetch('https://sae401-25.mmi-stdie.fr/elab/wp-json/polis/v1/constellation')
    const data = await response.json()
    constellations.value = data.map(item => ({
      id: item.id,
      title: item.title?.rendered || item.title || 'Sans titre',
      image: item.image || item.carte || '',
      saison: item.saison || null,
    }))
  } catch (error) {
    console.error('Erreur lors du chargement des constellations:', error)
  }
})
</script>

<style scoped>
.container {
  padding: 2rem;
  background-color: #0b0b2e;
  color: white;
  font-family: sans-serif;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: #1a1a40;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h2 {
  margin: 0.5rem;
  font-size: 1.2rem;
}

.card p {
  margin: 0.5rem;
  color: #ccc;
}
</style>
