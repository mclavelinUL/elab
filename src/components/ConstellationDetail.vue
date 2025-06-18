<template>
  <div v-if="constellation" class="detail-container">
    <h1>{{ constellation.title }}</h1>
    <img :src="constellation.image" />
    <p v-if="constellation.saison">Saison : {{ constellation.saison }}</p>
  </div>
  <div v-else>Chargement...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const constellation = ref(null)

onMounted(async () => {
  const id = route.params.id
  try {
    const response = await fetch(`http://polis.local/wp-json/polis/v1/constellation/${id}`)
    const data = await response.json()
    constellation.value = {
      id: data.id,
      title: data.title?.rendered || data.title,
      image: data.image || data.carte || '',
      saison: data.saison || null
    }
  } catch (e) {
    console.error('Erreur chargement constellation :', e)
  }
})
</script>

<style scoped>
.detail-container {
  padding: 2rem;
  color: white;
  background-color: #0b0b2e;
}
</style>
