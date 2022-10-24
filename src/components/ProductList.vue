<template>
  <ul class="catalog__list">
    <ProductItem v-bind:product="product" v-for="product in products" v-bind:key="product.id"></ProductItem>
    </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';
  export default {
    components:
    {ProductItem: ProductItem},
    props: ['products']
};
</script>
