<template>
  <div>
    <v-alert :type="type">
      {{ mensaje }}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: ["type", "mensaje"],
};
</script>
