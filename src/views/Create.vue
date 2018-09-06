<template>
  <div class="view-create">
    <form class="view-create__form">
      <h1 class="form-title">Sukurti detale</h1>
      <h2 v-if="isEmpty">Iveskite duomenis!</h2>
      <div class="form-field">
        <label class="form-field__label" for="">Pavadinimas</label>
        <input class="form-field__input" type="text" v-model="part.name">
      </div>
      <div class="form-field">
        <label class="form-field__label" for="">Gamintojas</label>
        <input class="form-field__input" type="text" v-model="part.manufacturer">
      </div>
      <div class="form-field">
        <label class="form-field__labe" for="">Modelis</label>
        <input class="form-field__input" type="text" v-model="part.model">
      </div>
      <div class="form-field">
        <label class="form-field__labe" for="">Spalva</label>
        <input class="form-field__input" type="text" v-model="part.color">
      </div>
      <div class="form-field">
        <label class="form-field__labe" for="">Kaina</label>
        <input class="form-field__input" type="text" v-model="part.price">
      </div>
      <div class="form-field">
        <label class="form-field__labe" for="">Metai</label>
        <input class="form-field__input" type="text" v-model="part.year">
      </div>
      <div class="form_btns">
      <app-button @click.native.prevent="createPart">Create</app-button>
      </div>
    </form>
    <div v-if="part.name" class="view-create__card">
      <app-preview-card :part="part"/>
    </div>
  </div>
</template>

<script>
import AppInputField from '@/components/AppInputField'
import AppButton from '@/components/AppButton'
import AppPreviewCard from '@/components/AppPreviewCard'
import { mapActions } from 'vuex'

export default {
  name: 'Create',
  components: {
    AppInputField,
    AppButton,
    AppPreviewCard
  },
  data () {
    return {
      showPreview: false,
      isEmpty: false,
      success: false,
      part: {
        name: '',
        manufacturer: '',
        model: '',
        color: '',
        price: '',
        year: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'addPart'
    ]),
    createPart () {
      if (this.part.name.length > 1 && this.part.manufacturer.length > 1 && this.part.price.length > 1 && this.part.year.length > 1 && this.part.model.length > 1) {
        this.addPart(this.part)
        this.isEmpty = false
        alert('Dalis prideta')
        this.$router.push({ name: 'Home' })
      } else {
        this.isEmpty = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.view-create {
  display: flex;
  align-items: center;

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
    min-height: 600px;
    height: 100%;
    padding-top: 50px;

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
