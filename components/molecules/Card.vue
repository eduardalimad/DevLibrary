<template>
  <div class="cardContainer">
    <h3 class="cardTitle">{{ titleCard }}</h3>
    <p>
      por <span class="cardLegenda_Span"> {{ legenda }}</span>
    </p>
    <p class="cardSinopse">
      As regras universais de arquitetura de software aumentam dramaticamente a
      produtividade dos desenvolvedores ao longo da vida dos sistemas de
      software..
    </p>
    <div class="button">
      <section v-if="produto === 'pink'">
        <ButtonPirula title="Indisponivel" :colorBtn="produto" />
      </section>
      <section v-if="produto === 'purple'">
        <ButtonPirula title="Disponivel" :colorBtn="produto" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    titleCard: String,
    legenda: String,
    produto: String,
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.cardContainer {
  display: grid;
  justify-items: start;
  width: 280px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 10px 1px rgba(255, 255, 255, 0.25);
  color: #070736;
  padding: 2rem;
  gap: 10px;

  .cardTitle {
    font-size: 22px;
    font-weight: 700;
    line-height: 25px;
  }
  .cardLegenda_Span {
    color: #0f7125;
    font-weight: 600;
    line-height: 15px;
  }
  .cardSinopse {
    color: rgba(7, 7, 54, 0.8);
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }

  .button {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
}
</style>