<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
import StartImage from '@/assets/resources/Star.svg'
import StartImageFIll from '@/assets/resources/Star_fill.svg'

const props = defineProps({
  name: String,
  image: String,
  price: String,
  rating: {
    type: [Number, String]
  },
  votes: Number,
  popular: Boolean,
  available: Boolean
})

const img = ref(null)

img.value = Number(props.rating) === 0 ? StartImage : StartImageFIll
</script>

<template>
  <article class="item">
    <img class="img-item" :src="image" :alt="name" />
    <span class="popular" v-if="popular">Popular</span>
    <aside class="description-container">
      <h2 class="title-item">{{ name }}</h2>
      <p class="price">{{ price }}</p>
    </aside>
    <aside class="container-rating">
      <ul>
        <li>
          <img :src="img" alt="Star rating" />
        </li>
        <li v-if="rating > 0">{{ Number(rating) === 5 ? '5.0' : `${rating}` }}</li>
        <li class="votes">{{ rating > 0 ? `(${votes} votes)` : 'No ratings' }}</li>
      </ul>
      <p class="sold-out" v-if="!available">Sold out</p>
    </aside>
  </article>
</template>

<style scoped>
.item {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.item:hover {
  transform: scale(0.95);
}

.img-item {
  border-radius: 16px;
}

.container-rating {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.container-rating ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: var(--font-size-price);
  font-weight: bold;
}

.votes {
  color: var(--color-text-votes);
}

.popular {
  position: absolute;
  top: 3%;
  left: 3%;
  padding: 4px 12px;
  border: none;
  border-radius: 32px;
  font-size: var(--font-size-small-text);
  font-weight: bold;
  color: var(--background-color-body);
  background-color: var(--color-text-label-popular);
}

.description-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.price {
  background-color: var(--background-color-price-label);
  font-size: var(--font-size-price);
  font-weight: bold;
  color: var(--background-color-body);
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
}

.title-item {
  font-size: var(--font-size-body);
}

.sold-out {
  font-size: var(--font-size-price);
  font-weight: bold;
  color: var(--color-text-sold-out);
}
</style>
