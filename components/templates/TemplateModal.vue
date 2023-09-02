<template>
  <div class="containerModal">
    <div class="modal">
      <header>
        <h2>Adicionar novo livro</h2>
        <button @click="closeModal">
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <span class="material-symbols-outlined">close</span>
        </button>
      </header>

      <form action="">
        <label for="uname"><b>Nome:</b></label>
        <input type="text" placeholder="Ex: Desenvolvimento NodeJS " v-model="book.title" />

        <label for="uname"><b>Autor:</b></label>
        <input type="text" placeholder="Ex: José Monteiro Valasques" v-model="book.autor" />

        <label for="uname"><b>Descrição:</b></label>
        <input
          type="text"
          placeholder="Ex: Este Livro explica o desenvolvimento desde o..."
          v-model="book.descricao"
        />

        <div style="margin-top: 2rem">
          <ButtonPirula title="Adicionar" colorBtn="purple" @click.native="send" />
        </div>
      </form>
    </div>
  </div>
</template>
  
  <script lang="ts">
import Vue from 'vue'
import http  from '@/service/index';

export default Vue.extend({
  data() {
    return {
      modal: false,
      book:{
        title: "",
        autor:"",
        descricao: ""
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit('modalEmitStatus', false)
    },
  async send(){
    await http.newBook(this.book).then((response) => {
    
        console.log(response);
        
      });
    }
  },
})
</script>
<style lang="scss" scoped>
    .containerModal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: rgb(32 7 54 / 80%);
    z-index: 10;
    .modal {
        text-align: center;
        background-color: white;
        height: 26rem;
        min-width: 23rem;
        margin: auto;
        padding: 1rem 1rem;
        border-radius: 0.6rem;
        z-index: 5;
        overflow: hidden;
        color: black;
        display: grid;
        justify-items: center;
        grid-template-rows: 3rem 20rem;
            header {
            display: grid;
            height: 2rem;
            grid-template-columns: 1fr 10px;
            align-items: center;
            width: 80%;
            h2 {
                text-align: start;
            }
            button {
                background: none;
            }
        }

        form {
        display: flex;
        width: 80%;
        flex-direction: column;

        label {
            display: flex;
            align-items: flex-start;
            width: 100%;
            margin-top: 0.6rem;

            b {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            }
        }
        input {
            width: 100%;
            height: 38px;
            border-radius: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.7);
            background: #fff;
        }
        input:focus,
        input:focus,
        select:focus,
        ::placeholder {
            padding-left: 0.4rem;
            font-family: var(--fontPoppins);
        }
        }
    }
    }
@media only screen and (min-width: 768px) {
        .modal {
          width: 28rem;
        }
}
</style>