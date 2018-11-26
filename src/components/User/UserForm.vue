<script>
import { map, pick, pullAll } from "lodash/fp";
import User from "@/api/models/User";
import Entity from "@/api/models/Entity";
export default {
  data() {
    return {
      editing: false,
      model: {},
    };
  },
  created() {
    this.model = new User();
    this.$on("SET_EDITING", item => {
      this.editing = true;
      this.model = item;
    });
    window.UserForm = this;
  },
  computed: {
    relationFields: () => User.relationFieldsList().filter(r => r.match(/.*_id/)),
    selectEntities: () => map(pick(["_id", "name"]), Entity.all()),
    fields: () => pullAll(User.relationFieldsList(), User.fieldsList()),
  },
  methods: {
    reset() {
      this.editing = false;
      this.model = new User();
    },
    saveItem() {
      if (!this.editing) {
        User.insert({
          data: this.model,
        });
        this.model = new User();
      } else {
        User.update(this.model);
        this.editing = false;
        this.model = new User();
      }
      console.log(User.all());
    },
  },
};
</script>

<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex
          @click="reset"
          xs12
          md12
          sm12>
        <v-btn
            :color="editing ? 'warning' : 'primary'"
            @click="saveItem">{{editing ? "更新": "添加"}}</v-btn>
        <span class="headline">{{editing ? "你在进行编辑更新" : "你在添加模式"}}</span>
      </v-flex>
      <v-flex
          xs12
          md4
          sm6>
        <v-text-field
            v-for="field in fields"
            v-model="model[field]"
            :key="field"
            :label=" $t !== undefined ? $t(field) : field">
        </v-text-field>
      </v-flex>
      <v-flex
          xs12
          md3
          sm3>
        <v-select
            v-for="relationField in relationFields"
            v-model="model[relationField]"
            :key="relationField"
            :label=" $t(relationField) "
            :items="selectEntities"
            item-text="name"
            item-value="_id">
        </v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" module>
.headline {
  padding: 20px;
}
</style>
