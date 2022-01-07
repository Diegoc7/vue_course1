<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "alura pic",
      subtitulo: "Sub Titulo",
      fotos: [
      ],
    };
  },
  created(){
    this.fotos = this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));

    //opção com declaração de variavel
    // let promisse = this.fotos = this.$http.get('http://localhost:3000/v1/fotos');
    // promisse
    // .then(res => res.json())
    // .then(fotos => this.fotos = fotos);

    //opcao feia
    // promisse.then(res => {
    //   res.json().then(fotos => this.fotos = fotos);
    // });
    
  }
};
</script>

<style>
</style>
