<template>
  <div id="app">
    <footer class="footer">
      <!-- Información Sitio Web -->
      <div class="infowebsite">
        <h2>BookStore</h2>
        <p>
          Este sitio web fue creado con el fin de dar visibilidad a una
          organización dedicada a la comercialización de libros. <br />
        </p>
        <p>
          <strong
            ><a href="https://github.com/AngieGomezA24/semana-2-67.git"
              >Repositorio GitHub</a
            ></strong
          >
        </p>
      </div>

      <!-- Contacto -->
      <div class="contact">
        <h2>Contacto</h2>
        <p>
          <strong>Angie Lizeth Gómez Acevedo</strong> <br />
          Arquitecta de Software <br />
          angiegomez.9924@gmail.com
        </p>

        <p>
          <strong>Valentina Mejia Rios</strong> <br />
          Desarrolladora Backend <br />
          vameri98@gmail.com
        </p>

        <p>
          <strong>Maria Alejandra García Ortega</strong> <br />
          Desarrolladora Frontend <br />
          garciaomalejandra@gmail.com
        </p>
        <p>
          <strong>Jhon Nelson Beltrán Pinzón</strong> <br />
          Tester <br />
          jnbeltranp@gmail.com
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  data() {
    return {
      title: "",
    };
  },
};
</script>

<style>
.footer {
  display: flex;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
.infowebsite {
  background-color: #9e85a8;
  width: 50%;
  padding: 40px;
}
.contact {
  background-color: #9e85a8;
  width: 50%;
  padding: 40px;
  text-align: right;
}
</style>