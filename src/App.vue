<template>

<!--
  MainPage v-if="currentPage === 'main'"/>
<ProductPage v-else-if="currentPage === 'product'"/>
<NotFoundPage v-else/> // Аналог записи снизу
-->

<component :is="currentPageComponent" :page-params="currentPageParams"/>
</template>

<script>
import MainPage from './pages/MainPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ProductPage from './pages/ProductPage.vue';
import eventBus from './eventBus';  // шина

// список страниц при добавлении новой страницы
const routes = {
  main: 'MainPage',
  product: 'ProductPage'
}

export default {
  data(){
    return {
      currentPage: 'main',
      currentPageParams:{}
    }
  },
  methods: {
    gotoPage(pageName, pageParams){
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {}
    }
  },
  // возвращает название компонента в зависимости от выбранной страницы
  computed: {
    currentPageComponent(){
      return routes[this.currentPage] || 'NotFoundPage'
    }
  },
  components: {
    MainPage, ProductPage, NotFoundPage
  },
  created(){ //шина
    eventBus.$on('gotoPage', (pageName, pageParams)=> this.gotoPage(pageName, pageParams))
  }
}

</script>

