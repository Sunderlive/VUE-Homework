<template>
<li class="catalog__item" v-bind:key="product.id">
            <a class="catalog__pic" href="#">
              <img v-bind:src="product.image" v-bind:alt="product.title">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                {{ product.title }}
              </a>
            </h3>

            <span class="catalog__price">
              {{ product.price }} ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item" v-for="colorProduct in product.colorHex" :key="colorProduct" :colorProduct="colorProduct">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" :value="colorProduct" v-model="color">
                  <span class="colors__value" :style="{'background-color': colorProduct}">
                  </span>
                </label>
              </li>
            </ul>
</li>

</template>

<script>
  export default {
    data() {
      return {
			color: this.product.colorHex
		};
    },
    props: ['product']
  }
</script>
