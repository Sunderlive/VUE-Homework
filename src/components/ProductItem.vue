<template>

<li class="catalog__item">
      <router-link class="catalog__pic" :to="{name:'product', params: {id:product.id}}">
        <img v-bind:src="product.image" :alt="product.title">
        <!-- Атрибут src связываю чере v-bind  -->
      </router-link>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price">
        {{ numberFormat(product.price)}}₽
      </span>

      <ul class="colors colors--black">
              <li class="colors__item" v-for="colorProduct in product.colors" :key="colorProduct.id" :colorProduct="colorProduct">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" :value="colorProduct" v-model="color">
                  <span class="colors__value" :style="{'background-color': colorProduct.code}">
                  </span>
                </label>
              </li>
            </ul>
    </li>
</template>

<script>

import gotoPage from '@/helpers/gotoPages';
import numberFormat from '@/helpers/numberFormat';

export default {
  data() {
      return {
			color: this.product.colorHex
		};
  },
  methods: {
    gotoPage,
    numberFormat,
  },
  props: ['product']
}

</script>

