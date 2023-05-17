<template>
   <label class="form__label">
      <slot/>
      <!-- Слот для динамического добавление -->
      <span class="form__value">{{ title }}</span>
      <span class="form__error" v-if="error">{{error}}</span>
      </label>
</template>


<script>
export default {
  props: ['title', 'error']
}
</script>
