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
    <ProductList v-bind:products="products"></ProductList>
    <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"></BasePagination>
  </section>

    </div>
  </main>

</template>

<script>
import products from './data/products'
import ProductList from './components/ProductList'
import BasePagination from "./components/BasePagination"
import ProductFilter from "./components/ProductFilter"


export default {
  name: 'App',
  components:
  {ProductList: ProductList, BasePagination: BasePagination, ProductFilter: ProductFilter },

  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: 0,
      page: 1,
      productsPerPage: 3,
    }
  },
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
    products() {
      const offset = (this.page - 1) * this.productsPerPage
      return this.filteredProducts.slice(offset, offset +this.productsPerPage);
    },
    countProducts(){
      return this.filteredProducts.length
    }
  }
};
</script>
