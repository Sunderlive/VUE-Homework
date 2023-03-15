<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter v-bind:price-from.sync="filterPriceFrom" v-bind:price-to.sync="filterPriceTo" v-bind:category-id.sync="filterCategoryId" v-bind:colors-id.sync="filterColor"/>
      <section class="catalog">
        <ProductList :products="products" ></ProductList>
        <!-- Передаем products из data products -->
        <Base-pagination v-model="page" :per-page="productsPerPage" :count="countProducts"></Base-pagination>
        <!-- per-page конвертированный PerPage типа как датаАтрибуты -->
      </section>

    </div>
  </main>


</template>

<script>

import products from '@/data/products' // Импортируем в состояние ниже
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';

export default {
  name: 'main',
  components: {ProductList:ProductList, BasePagination, ProductFilter},// указываем, что собираемся юзать компонет из ProductList.vue (Можно сократить до просто ProductList)
  data(){               // состояние. Мы задали products: products(это data.products.js)
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: 0,
      page: 1,
      productsPerPage:3,

     // products: products  // можно записать просто products т.к названия одинаковые
    }
  },

  //computed - вычисляемое свойство
  computed: {
    filteredProducts(){
      let filteredProducts = products;

      if(this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(product => product.price > this.filterPriceFrom);
      }

      if(this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(product => product.price < this.filterPriceTo);
      }

      if(this.filterCategoryId > 0) {
        filteredProducts = filteredProducts.filter(product => product.categoryId === this.filterCategoryId);
      }

      if(this.filterColor > 0) {
        filteredProducts = filteredProducts.filter(product => product.colorsId === this.filterColor)
      }

      return filteredProducts;
    },
    products(){
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset+ this.productsPerPage);
    },
    countProducts(){
      return this.filteredProducts.length
    }
  }
};
</script>
