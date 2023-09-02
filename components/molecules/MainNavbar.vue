<template>
    <nav>
        <nuxt-link to="/">
            <img src="../../static/icon/DevLibrary.svg" alt="" class="logoTutiBooks" >
        </nuxt-link>
        <ul>
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/books">Livros</nuxt-link>
            <li class="button">
                <ButtonPirula title=" + Adicionar" @click.native="showModal"/>
            </li>
        </ul>

        <div v-if="modal == true">
            <TemplateModal @modalEmitStatus="closeModal" />
        </div>
            
    </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return{
            modal:false,
        }
    },
    methods:{
        showModal(){
    
            this.modal = true
        },
        closeModal(){
            this.modal = false
        }
    }
})
</script>
<style lang="scss" scoped>
    nav{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        // background: var(--bgMain);
        position: fixed;
        top: 0;
        left: 0;
        padding: 0 6vw;
        color: white;
        z-index: 9;
        align-items: center;
        height: 5rem;
        position: relative;
        ul{
            display: flex;
            list-style: none;
            width: 38%;
            align-items: center;
            cursor: pointer;
            letter-spacing: 2px;
            justify-content: flex-end;
            gap: 1rem;

            a{
                color: white;
            }
            a.nuxt-link-exact-active {
            color: var(--textColor) !important;
            }   
        }

        @media only screen and (max-width: 600px) {
            // background: var(--primary);

            .logoTutiBooks{
                height: 20px;
            }
            ul{
            gap: 1rem;
            margin: .5rem;
            justify-content: space-evenly;
            .button{
                display: none;
            }
            }
        }
    }
    
</style>