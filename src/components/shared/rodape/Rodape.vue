<template>
  <div class="rodape">
    <slot class="conteudo"></slot>
    Empresa &copy;
  </div>
</template>
<script>
export default {};
</script>

<style  scoped>
.rodape {
  background-color: #cecece;

  text-align: center;

  border: solid 1px Gray;

  font-size: 15pt;

  font-family: Helvetica, sans-serif;

  font-weight: bold;

  width: 100%;

  color: Black;

  position: fixed;

  bottom: 0px;

  left: 0px;
}
.conteudo {
  text-align: center;
  padding-bottom: 30px;
}
</style>