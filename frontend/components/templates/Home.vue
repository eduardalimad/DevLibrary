<template>
  <div class="containerHome">
    <div class="mainHome">
      <h1>Seja bem vindo ao <span>DevLibrary</span></h1>
      <p>O maior Catálogo de livros da Web</p>
      <div class="containerBitton">
        <ButtonPirula
          title="Ver Catálogo"
          colorBtn="white"
          @click.native="redirect"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  },
  methods: {
    redirect() {
      return (window.location.href = '/books')
    },
  },
})
</script>

<style lang="scss" scoped>
.containerHome {
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .mainHome {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    h1 {
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      line-height: 45px;
      span {
        color: var(--textColor);
      }
    }
    p {
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 26px;
    }
  }
  .containerBitton {
    margin-top: 2rem;
  }
}
</style>