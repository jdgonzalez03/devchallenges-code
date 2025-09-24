<script setup>
import { ref, onMounted, computed } from 'vue'
import ItemCoffee from '@/components/ItemCoffee.vue'
import { URL } from '@/constants'

const items = ref(null)
const filterOption = ref(false)

onMounted(() => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      items.value = data
    })
    .catch((error) => {
      console.log(error)
    })
})

//Calcular el vector filtrado
const filteredItems = computed(() => {
  return filterOption.value ? items.value.filter((item) => item.available) : items.value
})

//Maneja el estado de si toca filtrar o no, en funcion de los botones
const handlerFilters = (option) => {
  filterOption.value = option
}

//Cambiar el background, segun el estado el filtro
const addBackgroundButton = (e) => {
  const buttons = e.target.closest('ul.filters').querySelectorAll('button')
  buttons.forEach((button) => button.classList.remove('active'))
  e.target.classList.add('active')
}

const handleClick = (e, option) => {
  handlerFilters(option)
  addBackgroundButton(e)
}
</script>

<template>
  <main>
    <img class="img-vector" src="/src/assets/resources/vector.svg" alt="Vector" />
    <h1 class="heading">Our Collection</h1>
    <p class="body-text">
      Introducing our Coffee Collection, a selection of unique coffees <br />
      from different roast types and origins, expertly roasted in small <br />batches and shipped
      fresh weekly.
    </p>
    <ul class="filters">
      <li>
        <button class="active" @click="(e) => handleClick(e, false)">All Products</button>
      </li>

      <li>
        <button @click="(e) => handleClick(e, true)">Available Now</button>
      </li>
    </ul>

    <section class="list">
      <ItemCoffee
        v-for="item in filteredItems"
        :key="item.id"
        :name="item.name"
        :image="item.image"
        :price="item.price"
        :rating="item.rating"
        :votes="item.votes"
        :popular="item.popular"
        :available="item.available"
      />
    </section>
  </main>
</template>

<style scoped>
main {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 950px;
  height: 100%;
  margin: 60px auto 0;
  padding: 0;
  background-color: var(--background-color-list);
  border-radius: 16px;
}

.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  row-gap: 44px;
}

.img-vector {
  position: absolute;
  top: 8%;
  left: 50%;
}

/*Texts & buttons*/
.heading {
  margin-top: 80px;
  font-size: var(--font-size-heading);
  text-align: center;
  z-index: 1;
}

.body-text {
  font-size: var(--font-size-body);
  color: var(--color-text-votes);
  font-weight: 600;
  text-align: center;
  z-index: 1;
}

.filters {
  font-family: var(--font-family);
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 1;
}

.filters button {
  font-size: var(--font-size-price);
  font-weight: 600;
  color: var(--color-text-content);
  background-color: transparent;
  border: 1px solid transparent;

  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filters button.active {
  background-color: var(--color-text-votes);
}

.filters button:hover {
  border-color: var(--color-text-votes);
  background-color: var(--color-text-votes);

  transform: translateY(-2px);
}

@media (max-width: 1024px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  main {
    overflow: hidden;
    text-align: center;
    padding: 2rem;
  }
  .list {
    grid-template-columns: 1fr;
  }

  .heading {
    margin-top: 60px;
  }

  .img-vector {
    position: absolute;
    top: 2%;
    left: 40%;
  }

  .filters button {
    transition: none;
  }

  .filters button:hover {
    border-color: var(--color-text-votes);
    background-color: var(--color-text-votes);
  }
}
</style>
