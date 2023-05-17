import BaseFormField from '@/components/BaseFormField.vue';

export default {
  props: ['title', 'error', 'placeholder', 'value'],
  components:  {BaseFormField},
  computed: {
    // двунаправленное вычисляемое свойство и через v-model с ним свяжемся
    dataValue: {
      get(){
        return this.value;
      },
      set(value){
        this.$emit('input', value)
      }
    }
  } ,
}

//Через миксины можно добавить ещё к примеру входящий параметр

