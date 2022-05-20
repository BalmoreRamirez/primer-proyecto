<template>
  <div class="text-center">
    <h1>Imagenes</h1>
    <Imagen :items="Items" />
  </div>
</template>
<script>
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
    return {
      Items: [],
    };
  },
  methods: {
    cargarImagen: async function () {
      try {
        const setting = {
          method: "GET",
        };
        const url = "https://picsum.photos/v2/list?page=2&limit=10";
        const data = await fetch(url, setting);
        const json = await data.json();
        this.Items = json;
      } catch (err) {
        console.log(err);
      }
    },
  },
  watch: {},
};
</script>
