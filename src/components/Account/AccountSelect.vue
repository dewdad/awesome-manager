<script>
import { map, pick } from "lodash/fp";
import Account from "@/api/models/Account";
export default {
  data() {
    return {
      model: { "_id": 1, label: "Select Account" },
    }
  },
  created() {
    window.AccountSelect = this;
  },
  computed: {
    accounts: () => map(pick(["_id", "text"]), Account.all()),
  },
  methods: {
    change() {
      this.$emit("Account_CHANGED", this.model._id)
    }
  }
}
</script>
<template>
  <v-select
      :items="accounts"
      item-text="text"
      item-value="_id"
      v-model="model._id"
      :label="model.label"
      class="white--text"
      @change="change"
    >
  </v-select>
</template>
