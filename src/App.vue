
<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>
    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="Filtro por título" >
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltros">
        <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :src="foto.url" :titulo="foto.titulo"></imagem-responsiva>
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';
import ImagemResponsiva from './components/shared/imagem-responsiva/ImagemResponsiva.vue';

export default {

    components: {
      'meu-painel' : Painel,
      'imagem-responsiva' : ImagemResponsiva
    },

  data() {
    return {
      titulo: "alura pic",
      subtitulo: "Sub Titulo",
      fotos: [],
      filtro: ''
    };
  },
  computed: {
    fotosComFiltros(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo))
      }else{
        return this.fotos;
      }
    }
  },
  created(){
    this.fotos = this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));
    
  }
};
</script >

<style >
 .corpo{
   font-family: Helvetica, sans-serif;
   width: 96%;
   margin: 0 auto;
 }

 .centralizado{
   text-align: center;
 }

 .lista-fotos{
   list-style: none;
 }

 .lista-fotos .lista-fotos-item{
   display: inline-block;
 }
 
  .filtro{
    display: block;
    width: 100%;
  }
</style>
