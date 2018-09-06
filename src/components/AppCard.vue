<template>
  <div class="app-card">
    <div class="app-card__icon">
      <img
      class="icon-icon"
      :src="editIcon"
      alt="edit icon"
      @click="$router.push({ name: 'Edit', params: {
        id: part._id}})" />
      <img
      class="icon-icon"
      :src="deleteIcon"
      alt="delete icon"
      @click="removePart(part._id)"/>
    </div>
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
import editIcon from '@/assets/icons/edit-regular.svg'
import deleteIcon from '@/assets/icons/trash-alt-regular.svg'
import { mapActions } from 'vuex'

export default {
  name: 'AppCard',
  data () {
    return {
      editIcon,
      deleteIcon
    }
  },
  props: {
    part: Object
  },
  methods: {
    ...mapActions(['deletePart']),
    removePart (id) {
      this.deletePart(id)
    }
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

  &__icon {
    display: flex;
    justify-content: flex-end;

    .icon-icon {
      width: 30px;
      height: 30px;
      opacity: 0.5;
      margin-left: 10px;

      &:hover {
        opacity: 1;
      }
    }
  }

  &__list {
    list-style: none;
  }

  &__item {
    padding: 5px;
  }
}
</style>
