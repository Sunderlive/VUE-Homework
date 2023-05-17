<template>
<div class="cart__block">
    <ul class="cart__orders">
      <li class="cart__order" v-for="product in products.basket.items">
        <h3>{{ product.product.title }}</h3>
        <b> {{ product.product.price }} ₽</b>
        <span>Артикул: {{ product.product.id }}</span>
      </li>
    </ul>
    <div class="cart__total">
      <p>Доставка: <b>500 ₽</b></p>
      <p>Итого: <b>{{ products.basket.items.length }}</b> товара на сумму <b>{{ products.totalPrice }} ₽</b></p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['products']
}

</script>
