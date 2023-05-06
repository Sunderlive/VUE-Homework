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
      <ProductFilter v-bind:price-from.sync="filterPriceFrom" v-bind:price-to.sync="filterPriceTo" v-bind:category-id.sync="filterCategoryId" v-bind:color-id.sync="filterColor"/>
      <section class="catalog">
        <div v-if="productsLoading">Загрузка товаров ...</div>
        <div v-if="productsLoadingFailed">Произошла ошибка при загрузке товаров <button @click.prevent="loadProducts" >Попробовать ещё раз</button> </div>
        <ProductList :products="products" ></ProductList>
        <!-- Передаем products из data products -->
        <Base-pagination v-model="page" :per-page="productsPerPage" :count="countProducts"></Base-pagination>
        <!-- per-page конвертированный PerPage типа как датаАтрибуты -->
      </section>

    </div>
  </main>


</template>

<script>

import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import axios from 'axios'
import { API_BASE_URL } from '@/config';

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
      productsPerPage:6,
      productsData: null,

      productsLoading: false,
      productsLoadingFailed: false
     // products: products  // можно записать просто products т.к названия одинаковые
    }
  },

  //computed - вычисляемое свойство
  computed: {
    products(){
      return this.productsData
       ? this.productsData.items.map (product => {
        return {
          ...product,
          image: product.image.file.url
        }
       }) // приведем к нужному формату из сервера
       : [] // из-за того, что не успевает прогрузиться, нужно вернуть пустой массив
    },
    countProducts(){
      return this.productsData ? this.productsData.pagination.total : 0
    }
  },
  methods: {
    loadProducts() {
      this.productsLoading = true
      this.productsLoadingFailed = false
      clearTimeout(this.loadProductsTimer) // Для правильной загрузки и выполнится только последний метод
      this.loadProductsTimer = setTimeout(() => {
        axios.get(API_BASE_URL+`/api/products`, { // в методе get доступна опция
        params: {
          page: this.page,
          limit: this.productsPerPage,
          categoryId: this.filterCategoryId,
          minPrice: this.filterPriceFrom ,
          maxPrice: this.filterPriceTo,
          colorId: this.filterColor,
        }
      })
      .then(response => this.productsData = response.data)
      .catch(() => this.productsLoadingFailed= true)
      .then(()=> this.productsLoading = false)
      },0)
    }
  },
  watch: {
    page(){
      this.loadProducts()   // следим за изменением свойства page и если изменилась , то перезагружаем
    },
    filterPriceFrom() {
      this.loadProducts()
    },
    filterPriceTo() {
      this.loadProducts()
    },
    filterCategoryId(){
      this.loadProducts()
    },
    filterColor(){
      this.loadProducts()
    },

  },
  created(){
    this.loadProducts()
  }
};
</script>
