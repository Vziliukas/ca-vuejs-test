<template>
  <nav class="app-nav">
    <ul class="app-nav__list">
      <li class="app-nav__list__item">
        <router-link :to="{ name: 'Home'}">Home</router-link>
      </li>
      <li class="app-nav__list__item">
        <router-link :to="{ name: 'Create'}">Create</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.app-nav {
  width: 100%;
  border-bottom: 1px solid grey;
  background-color: white;

  &__list {
    display: flex;
    list-style: none;

    &__item {
      padding: 25px;

      &:hover {
        background: #eeeff3;
      }

      a {
        padding: 25px;
        color: black;
        text-decoration: none;
      }
    }
  }
}
</style>
