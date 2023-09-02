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
    <section v-show="disableBackend === true" class="section_Cards">
      <Card titleCard="Title" legenda="xxxxxxxxxxx" produto="purple" />
      <Card titleCard="Title" legenda="xxxxxxxxxxx" produto="purple" />
      <Card titleCard="Title" legenda="xxxxxxxxxxx" produto="pink" />
      <Card titleCard="Title" legenda="xxxxxxxxxxx" produto="pink" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import http from '@/service/index'
import { objectBooks } from '@/types/listBooks'
export default Vue.extend({
  data() {
    return {
      listBooks: [] as objectBooks[],
      disableBackend: true,
    }
  },

  async created() {
    await http
      .listBooks()
      .then((res) => {
        const resultado = res.data
        this.listBooks = resultado
        console.log(this.listBooks)
        this.disableBackend = false
      })
      .catch(function (error) {
        console.error(error)
        alert('Pra visualizar os dados, start o backend')
      })
  },
  computed: {},
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