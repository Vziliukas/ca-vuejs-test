<template>
  <aside class="app-aside">
    <h1 class="app-aside__title">Select filters</h1>
    <div class="app-aside__filters">
      <AppButton @click.native="sortBy('price')" class="filters-btn">Sort By Price</AppButton>
      <AppButton @click.native="sortBy('year')" class="filters-btn">Sort By Year</AppButton>
      <AppButton @click.native="sortBy('name')" class="filters-btn">Sort By Title</AppButton>
      <AppButton @click.native="sortBy('model')" class="filters-btn">Sort By Model</AppButton>
      <AppButton @click.native="sortBy('manufacturer')" class="filters-btn">Sort By Manufacturer</AppButton>
      <AppButton @click.native="resetSort" class="filters-btn">Reset Sorting</AppButton>
    </div>
  </aside>
</template>

<script>
import AppButton from './AppButton'
import { mapActions } from 'vuex'

export default {
  name: 'AppAside',
  components: {
    AppButton
  },
  methods: {
    ...mapActions(['sortBy', 'resetSort'])
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 20vw;
  padding: 25px;

  &__filters {
    margin-top: 30px;
    display: flex;
    flex-direction: column;

    .filters-btn {
      margin: 5px;
      width: 100%;
      font-size: 16px;
      padding: 15px;
    }
  }
}
</style>
