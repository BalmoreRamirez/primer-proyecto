<template>
  <div class="text-center">
    <h1>Imagenes</h1>
    <Imagen :items="Items" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Imagen from "@/components/imagen.vue";
export default {
  name: "Imagenes",
  components: {
    Imagen,
  },
  created() {
    this.cargarImagen();
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("imagenes", ["cargarImagen"]),
  },
  computed: {
    ...mapGetters("imagenes", ["Items"]),
  },
};
</script>
