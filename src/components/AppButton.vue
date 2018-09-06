<template>
  <button class="app-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style lang="scss" scoped>
.app-button {
  min-width: 200px;
  font-size: 16px;
  text-align: center;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 15px;
  margin-right: 15px;
  text-transform: uppercase;
  opacity: 1;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
</style>


