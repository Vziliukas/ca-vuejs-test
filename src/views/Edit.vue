<template>
  <div class="view-edit">
    <form class="view-edit__form">
      <h1 class="form-title">Redaguoti</h1>
      <div class="form-field">
        <label class="form-field__label" for="">Pavadinimas</label>
        <input class="form-field__input" type="text" v-model="part.name">
      </div>
      <div class="form-field">
        <label class="form-field__label" for="">Gamintojas</label>
        <input class="form-field__input" type="text" v-model="part.manufacturer">
      </div>
      <div class="form-field">
        <label class="form-field__label" for="">Modelis</label>
        <input class="form-field__input" type="text" v-model="part.model">
      </div>
      <div class="form-field">
        <label class="form-field__label" for="">Spalva</label>
        <input class="form-field__input" type="text" v-model="part.color">
      </div>
      <div class="form-field">
        <label class="form-field__label" for="">Kaina</label>
        <input class="form-field__input" type="text" v-model="part.price">
      </div>
       <div class="form-field">
        <label class="form-field__label" for="">Metai</label>
        <input class="form-field__input" type="text" v-model="part.year">
      </div>
      <div class="form-btns">
      <app-button @click.native.prevent="handleClick($event)">Issaugoti</app-button>
      <app-button @click.native.prevent="$router.push({ name: 'Home'})
      ">Atgal</app-button>
      </div>
    </form>
    <div class="view-edit__card">
      <app-preview-card :part="part"/>
    </div>
  </div>
</template>

<script>
import AppInputField from '@/components/AppInputField'
import AppButton from '@/components/AppButton'
import AppPreviewCard from '@/components/AppPreviewCard'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Edit',
  components: {
    AppInputField,
    AppButton,
    AppPreviewCard
  },
  computed: {
    ...mapGetters([
      'part'
    ])
  },
  created () {
    this.getSinglePart(this.$route.params.id)
  },
  methods: {
    ...mapActions([
      'getSinglePart',
      'editPart'
    ]),
    handleClick (e) {
      this.editPart(this.part)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.view-edit {
  display: flex;
  align-items: center;
  padding-top: 50px;

  &__card {
    padding-top: 100px;
    align-self: flex-start;
    flex: 1;
  }

  &__form {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 15px;
    min-width: 50vw;
    height: 100%;
    min-height: 600px;

    .form-title {
      padding-bottom: 20px;
    }

    .form-field {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      &__label {
        font-size: 16px;
        margin: 5px;
      }
      &__input {
        padding: 10px;
        font-size: 16px;
      }
    }
  }
}
</style>
