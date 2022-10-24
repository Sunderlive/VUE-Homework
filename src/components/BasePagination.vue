<template>
  <ul class="catalog__pagination pagination">
  <li class="pagination__item">
    <a class="pagination__link pagination__link--arrow pagination__link--disabled" aria-label="Предыдущая страница" v-on:click.prevent="prevPage()">
      <svg width="8" height="14" fill="currentColor">
        <use xlink:href="#icon-arrow-left"></use>
      </svg>
    </a>
  </li>
  <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
    <a href="#" class="pagination__link" v-bind:class="{'pagination__link--current' : pageNumber === page}" v-on:click.prevent="paginate(pageNumber)">
      {{ pageNumber }}
    </a>
  </li>
  <li class="pagination__item">
    <a class="pagination__link pagination__link--arrow" href="#" aria-label="Следующая страница" v-on:click.prevent="nextPage()">
      <svg width="8" height="14" fill="currentColor">
        <use xlink:href="#icon-arrow-right"></use>
      </svg>
    </a>
  </li>
    </ul>
</template>

<script>

  export default {
    model: {
      prop: 'page',       // свойство
      event: 'paginate',       // событие
    },
    props: ['page', 'count', 'perPage'],  // perPage автоматически станет per-page
    computed: {
      pages() {
        return Math.ceil(this.count / this.perPage);
      }
    },
    methods: {

      paginate(page) {
        this.$emit('paginate', page);
      },
      nextPage(page = this.page) {
        if(page >= this.pages){
          this.$emit('paginate', page);
        }
        else{
          this.$emit('paginate', page + 1);
        }
      },
      prevPage(page = this.page){
        if(page === 1){
          this.$emit('paginate', page);
        }
        else {
          this.$emit('paginate', page - 1);
        }
      }
    }
  }

</script>

