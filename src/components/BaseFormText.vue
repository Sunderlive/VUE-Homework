<template>
  <BaseFormField :title="title" v-bind:error="error">
    <input class="form__input" v-model="dataValue" :type="type" :placeholder="placeholder">
  </BaseFormField>

</template>

<script>
import formFieldMixin from '@/mixins/formFieldMixin';

export default {
    props: {
      type: {
        default:'text'
      }
    },
    mixins: [formFieldMixin] // общий код подключается через миксин и остальное можно так добавить
}
</script>
