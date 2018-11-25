---
to: src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/index.vue
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
%><script>
import <%= modelName %>Form from "@/components/<%= modelName %>/<%= modelName %>Form";
import <%= modelName %>Table from "@/components/<%= modelName %>/<%= modelName %>Table";
export default {
  components: {
    <%= modelName %>Form,
    <%= modelName %>Table,
  },
  data() {
  },
  computed: {
  },
  created() {
    window.<%= modelName %>App = this;
  },
  methods: {
  },
};
</script>

<template>
  <v-card>
    <v-card-title v-show="false">
      <%= modelName %>App
    </v-card-title>
    <v-responsive>
      <<%= modelName %>Table></<%= modelName %>Table>
    </v-responsive>
    <v-responsive>
      <<%= modelName %>Form></<%= modelName %>Form>
    </v-responsive>
  </v-card>
</template>

<style lang="scss" module>
</style>
