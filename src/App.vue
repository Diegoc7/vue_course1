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
        {
          url: "https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg",
          titulo: "cachorro",
        },
        {
          url: "https://blog.emania.com.br/wp-content/uploads/2019/01/como-tirar-foto-de-cachorro.jpg",
          titulo: "cachorro2",
        },
      ],
    };
  },
};
</script>

<style>
</style>
