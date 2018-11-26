<script>
import UserForm from "./UserForm";
import UserTable from "./UserTable";
export default {
  components: {
    UserForm,
    UserTable,
  },
  data() {},
  computed: {},
  created() {
    window.UserApp = this;
  },
  methods: {},
};
</script>

<template>
  <v-card>
    <v-responsive>
      <UserTable></UserTable>
    </v-responsive>
    <v-responsive>
      <UserForm></UserForm>
    </v-responsive>
  </v-card>
</template>

<style lang="scss" module>
</style>
