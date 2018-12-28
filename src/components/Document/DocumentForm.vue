<script>
import { map, pick, pullAll } from "lodash/fp";
import Document from "@/api/models/Document";
import Entity from "@/api/models/Entity";
import User from "@/api/models/User";
export default {
  data() {
    return {
      editing: false,
      model: {},
    };
  },
  created() {
    this.model = new Document();
    this.$on("SET_EDITING", item => {
      this.editing = true;
      this.model = item;
    });
    window.DocumentForm = this;
  },
  computed: {
    relationFields: () => Document.relationFieldsList().filter(r => r.match(/.*_id/)),
    selectEntities: () => map(pick(["_id", "name"]), Entity.all()),
    selectUsers: () => map(pick(["_id", "name"]), User.all()),
    fields: () => pullAll(Document.relationFieldsList(), Document.fieldsList()),
  },
  methods: {
    reset() {
      this.editing = false;
      this.model = new Document();
    },
    saveItem() {
      if (!this.editing) {
        Document.insert({
          data: this.model,
        });
        this.model = new Document();
      } else {
        Document.update(this.model);
        this.editing = false;
        this.model = new Document();
      }
      console.log(Document.all());
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
        <v-btn
            :color=" editing? 'secondary': 'primary'"
            @click="saveItem">{{editing ? "更新": "添加"}}</v-btn>
      </v-flex>
      <v-flex
          xs12
          md6
          sm4>
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
            v-if="relationField !== 'author_id'"
            v-for="relationField in relationFields"
            v-model="model[relationField]"
            :key="relationField"
            :label=" $t(relationField) "
            :items="selectEntities"
            item-text="name"
            item-value="_id">
        </v-select>
        <v-select
            v-model="model['author_id']"
            key="author_id"
            :label=" $t(author_id) "
            :items="selectUsers"
            item-text="name"
            item-value="_id">
        </v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" module>
//
</style>
