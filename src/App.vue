<template>
  <div id="app">
    <top-menu></top-menu>
    <top-banner></top-banner>
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
import imagenMaria from "../src/assets/maria_alejandra_garcia_ortega.jpeg"
import imagenValentina from "../src/assets/valentina_mejia_rios.jpeg"
import imagenJhon from "../src/assets/jhon_n_beltran.jpeg"
import TopMenu from './components/TopMenu.vue';
import TopBanner from './components/TopBanner.vue';

export default {
  name: "App",
  components: {
    PageFooter,
    TeamCard,
    TopMenu,
    TopBanner,
  },
  data() {
    return {
      team: [
        {
          codigo: 1,
          nombre: "Angie Lizeth Gómez Acevedo",
          descripcion: "Tiene 21 años, le gusta realizar caminatas y tomar fotografias",
          rol: "Arquitecta de software",
          image: imagenAngie,
        },
        {
          codigo: 2,
          nombre: "Valentina Mejia Rios",
          descripcion: "Tiene 22 años, le gusta pintar y leer",
          rol: "Desarrolladora Backend",
          image: imagenValentina,
        },
        {
          codigo: 3,
          nombre: "Maria Alejandra García Ortega",
          descripcion: "Tiene 28 años, le gusta hacer Yoga y Meditar",
          rol: "Desarrolladora Frontend",
          image: imagenMaria,
        },
        {
          codigo: 4,
          nombre: "Jhon Nelson Beltrán Pinzón",
          descripcion: "Tiene 40 años, le gusta aprender, actualizar sus saberes y poder transmirlos",
          rol: "Tester",
          image: imagenJhon,
        },
      ],
    };
  },
};
</script>

