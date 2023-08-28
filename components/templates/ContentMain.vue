<template>
    <div class="container">

        <section class="section_Cards">
            <Card titleCard="A menina que Roubava" legenda="Jose" produto="pink"/>
            <Card titleCard="A menina que Roubava" legenda="John Green" produto="purple"/>
            <Card titleCard="A menina que Roubava" legenda="tshsj" produto="purple"/>
            <Card titleCard="A menina que Roubava" legenda="tshsj" produto="pink"/>
            <Card titleCard="A menina que Roubava" legenda="Jose" produto="pink"/>
            <Card titleCard="A menina que Roubava" legenda="John Green" produto="purple"/>
            <Card titleCard="A menina que Roubava" legenda="tshsj" produto="purple"/>
            <Card titleCard="A menina que Roubava" legenda="tshsj" produto="pink"/>
        </section>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data(){
        return{

        }
    }
})
</script>

<style lang="scss" scoped>
.container{
    height: 100vh;
    .section_Cards{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        padding: 1rem;
    }
}
</style>