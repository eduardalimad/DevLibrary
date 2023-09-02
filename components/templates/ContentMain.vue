<template>
  <div class="container">
    <section class="section_Cards">
      <Card
        v-for="(list, index) in listBooks"
        :key="index"
        :titleCard="list.title"
        :legenda="list.autor"
        :sinopse="list.descricao"
        produto="purple"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import http from '@/service/index'
export default Vue.extend({
  data() {
    return {
      listBooks: [],
    }
  },

  async created() {
    await http.listBooks().then((res) => {
      const resultado = res.data
      this.listBooks = resultado
      console.log(this.listBooks)
    })
  },
})
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  .section_Cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;
  }
}
</style>