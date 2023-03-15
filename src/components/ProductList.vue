<template>
  <ul class="catalog__list">
    <ProductItem :product="product"  v-for="(product) in products" v-bind:key="product.id" />
    <!-- product = product я прокидываю в productItem как аргумент функции -->
    <!-- нужно задать ключ чтобы VUE мог связать элемент из нашего цикла с соответствующим объектом из массива который хранится в состоянии.
            index это второй аргумент для ключа-->
  </ul>
</template>

<script>

import ProductItem from './ProductItem.vue';
export default {
  components: {ProductItem:ProductItem},
  props: ['products']
}

</script>
