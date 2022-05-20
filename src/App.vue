<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-for="(item, index) in rutas"
        :key="index"
        text
        @click="insertarRutas(item.ruta)"
      >
        <span class="mr-2"> {{ item.nombre }}</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    rutas: [
      { nombre: "Home", ruta: "/" },
      { nombre: "About", ruta: "/about" },
      { nombre: "Usuarios", ruta: "/usuarios" },
      { nombre: "Imagenes", ruta: "/imagenes" },
    ],
  }),
  methods: {
    insertarRutas(ruta) {
      this.$router.push(ruta);
    },
  },
};
</script>
