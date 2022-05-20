<template>
  <div class="about">
    <h1>Clientes</h1>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
// import Imagen from "@/components/imagen.vue";
export default {
  name: "Clientes",
  components: {
    // Imagen,
  },
  created() {
    this.cargarClientes();
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("clientes", ["cargarClientes"]),
  },
  computed: {
    ...mapGetters("clientes", ["Items"]),
  },
};
</script>