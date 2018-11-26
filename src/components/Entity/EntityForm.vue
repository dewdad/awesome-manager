<script>
import Entity from "@/api/models/Entity";
export default {
  data() {
    return {
      editing: false,
      model: {},
    };
  },
  created() {
    this.model = new Entity();
    this.$on("SET_EDITING", item => {
      this.editing = true;
      this.model = item;
    });
    window.EntityForm = this;
  },
  computed: {
    fields: () => Entity.fieldsList(),
  },
  methods: {
    reset() {
      this.editing = false;
      this.model = new Entity();
    },
    saveItem() {
      if (!this.editing) {
        Entity.insert({
          data: this.model,
        });
        this.model = new Entity();
      } else {
        Entity.update(this.model);
        this.editing = false;
        this.model = new Entity();
      }
      console.log(Entity.all());
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
        {{editing ? "你在进行编辑更新" : "你在添加模式"}}
      </v-flex>
      <v-text-field
          v-for="field in fields"
          v-model="model[field]"
          :key="field"
          :label=" $t !== undefined ? $t(field) : field">
      </v-text-field>
      <v-btn
          color="primary"
          @click="saveItem">{{editing ? "更新": "添加"}}</v-btn>
    </v-layout>
  </v-container>
</template>

<style lang="scss" module>
</style>
