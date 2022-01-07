<template>
<div>
  <h1>{{ titulo }}</h1>
  <h2 v-text="subtitulo"></h2>
  <!-- pode se usar : ou v-bind -->
 <img :src="foto.url" v-bind:alt="foto.titulo">
</div>
</template>

<script>
export default {
 data() {
   return {
     titulo : 'alura pic',
     subtitulo : 'Sub Titulo',
     foto: {
       url: 'https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg',
       titulo: 'cachorro',
     }
   }
 }
}
</script>

<style>

</style>
