<template>
  <div>
    <div class="about">
      <h1 class="text-center mt-5">
        Este es el usuario {{ $route.params.id }}
      </h1>
      <appAlerta type="success" mensaje="Es una alerta"></appAlerta>
      <appAlerta type="error" mensaje="Es un error"></appAlerta>
    </div>
  </div>
</template>
<script>
import appAlerta from "../components/alertas.vue";
export default {
  name: "Usuarios",
  components: {
    appAlerta,
  },
  data() {
    return {};
  },
  methods: {},
  watch: {},
};
</script>
