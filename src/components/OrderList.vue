<template>
<div class="cart__block">
  <ul class="cart__orders" >
    <li class="cart__order" v-for="product in products">
      <h3>{{ product.product.title }}</h3>
      <b>{{ product.product.price }} ₽</b>
      <span>Артикул: {{ product.product.id}}</span>
    </li>
  </ul>

  <div class="cart__total">
    <p>Доставка: <b>500 ₽</b></p>
    <p>Итого: <b>{{ products.length }}</b> товара на сумму <b> {{totalPrice | numberFormat}} ₽</b></p>
  </div>

  <button class="cart__button button button--primery" type="submit">
    Оформить заказ
  </button>
</div>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import { mapGetters } from 'vuex';
export default {
  filters: {numberFormat},
  computed: {
    ...mapGetters({products: 'cartDetailProducts', totalPrice: 'cartTotalPrice'}), // т.е запись можно сократить запись и не создавать products()
  }
}

</script>
