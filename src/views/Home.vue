<template>
  <div class="home">
    <app-aside class="home-aside"/>
    <div class="home-list">
      <div class="home-list__item" v-for="(part, index) in parts" :key="index">
        <app-card :part="part"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard'
import AppAside from '@/components/AppAside'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    AppCard,
    AppAside
  },
  computed: {
    ...mapGetters([
      'parts'
    ])
  },
  created () {
    this.getParts()
  },
  methods: {
    ...mapActions([
      'getParts'
    ])
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;

  &-list {
    display: flex;
    flex-wrap: wrap;

    &__item {
      flex: 1 0 50%;
    }
  }
}
</style>
