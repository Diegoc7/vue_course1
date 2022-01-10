
<template>

        <div class="painel">
          <h2 class="painel-titulo" @dblclick="visivel = !visivel" >{{ titulo }}</h2>
          <!-- <h2 class="painel-titulo" v-on:dblclick="visivel = !visivel" >{{ titulo }}</h2> -->
          <div class="painel-conteudo" v-show="visivel">
              <!-- não se usa v-show no slot -->
          <slot></slot>
          </div>
        </div>

</template>

<script>
export default {
 props: [
     'titulo'
 ],
 data(){
     return {
         visivel: true
     }
 }
};
</script>

<style scoped>
 
 .imagem-responsiva{
   width: 100%;
 }

 /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
  
  /* colocando todos os elementos do painel com box shadow */

  * {
    box-shadow: 5px 5px 5px;
  }
</style>
