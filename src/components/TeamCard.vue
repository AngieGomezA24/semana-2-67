<template>
  <div id="app">
    <div class="container">
      <div class="card text-dark ">
        <div class="d-flex justify-content-center p-2">
          <img class="card-image" :src="member.imagen" alt="Fotografia Equipo" />
        </div>
        <div class="card-body">
          <h3 class="card-title">{{ member.nombre }}</h3>
          <p class="card-text">{{ member.descripcion }}</p>
          <p class="card-text"><b><span>Rol:</span></b>{{ member.rol }}</p>
          <p class="card-text"><b><span>codigo:</span></b>{{ member.codigo }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: ["member"],
};
</script>

<style scoped>
    .card{
        background-color: thistle;
        text-align: center;
        font-size: 15px;
        height: 500px;
    }
    .card-title{
        font-size: 18px;
    }
    .card-image{
        width: 90%;
    }
</style>
