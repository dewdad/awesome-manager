<script>
import ActivityForm from "./ActivityForm";
import ActivityTable from "./ActivityTable";
export default {
  components: {
    ActivityForm,
    ActivityTable,
  },
  data() {
  },
  computed: {
  },
  created() {
    window.ActivityApp = this;
  },
  methods: {
  },
};
</script>

<template>
  <v-card>
    <v-card-title v-show="false">
      ActivityApp
    </v-card-title>
    <v-responsive>
      <ActivityTable></ActivityTable>
    </v-responsive>
    <v-responsive>
      <ActivityForm></ActivityForm>
    </v-responsive>
  </v-card>
</template>

<style lang="scss" module>
</style>
