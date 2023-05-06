<template>
<!-- eslint-disable max-len -->
<div class="product__counter form__counter">
  <button type="button" aria-label="Убрать один товар" @click.prevent='itemAmount--' style='cursor: pointer;'>
    <svg width="10" height="10" fill="currentColor">
      <use xlink:href="#icon-minus"></use>
    </svg>
  </button>

  <input type="text" v-model.number="itemAmount" name="count">

  <button type="button" aria-label="Добавить один товар" @click.prevent='itemAmount++' style='cursor: pointer;'>
    <svg width="10" height="10" fill="currentColor">
      <use xlink:href="#icon-plus"></use>
    </svg>
  </button>
</div>
</template>

<script>
export default ({
  props: ['amount'],
  computed: {
    itemAmount: {
      set(value) {
        if (value >= 1) {
          this.$emit('update:amount', value);
        }
      },
      get() {
        return this.amount;
      },
    },
  },
});
</script>

