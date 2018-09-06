<template>
  <div class="app-card">
    <ul class="app-card__list">
      <li class="app-card__item">Pavadinimas: {{ part.name }}</li>
      <li class="app-card__item">Gamintojas : {{ part.manufacturer }}</li>
      <li class="app-card__item">Modelis: {{ part.model }}</li>
      <li class="app-card__item">Spalva: {{ part.color }}</li>
      <li class="app-card__item">Metai: {{ part.year }} </li>
      <li class="app-card__item">Kaina: {{ part.price }} €</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    part: Object
  }
}
</script>

<style lang="scss" scoped>
.app-card {
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin: 15px;
  border: 1px solid rgba(rgb(218, 216, 216), 0.87);
  box-shadow: 4px 7px 19px 1px rgba(173, 172, 170, 1);

  &__list {
    list-style: none;
  }

  &__item {
    padding: 5px;
  }
}
</style>
