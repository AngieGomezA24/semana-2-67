<template>
  <div id="app">
    <div class="container">
      <div class="row mb-5">
        <div class="col mt-5 " v-for="(item, index) in team" :key="index">
          <team-card v-bind:member="item"></team-card>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageFooter from "./components/PageFooter.vue";
import TeamCard from "./components/TeamCard.vue";
import imagenAngie from "../src/assets/angie_lizeth_gomez_acevedo.jpeg"


export default {
  name: "App",
  components: {
    PageFooter,
    TeamCard,
  },
  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: "Angie Lizeth Gómez Acevedo",
          descripcion: "Descripcion",
          rol: "Arquitecta de software",
          imagen: imagenAngie,
        },
        {
          codigo: 2,
          nombre: "Valentina Mejia Rios",
          descripcion: "Descripcion",
          rol: "Desarrolladora Backend",
          imagen: "../src/assets/valentina_mejia_rios.jpeg",
        },
        {
          codigo: 3,
          nombre: "Maria Alejandra García Ortega",
          descripcion: "Descripcion",
          rol: "Desarrolladora Frontend",
          imagen: "../src/assets/maria_alejandra_garcia_ortega.JPG",
        },
        {
          codigo: 4,
          nombre: "Jhon Nelson Beltrán Pinzón",
          descripcion: "Descripcion",
          rol: "desarrollador",
          imagen: "../src/assets/angie_lizeth_gomez_acevedo.jpeg",
        },
      ],
    };
  },
};
</script>

