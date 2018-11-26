<script>
import Document from "@/api/models/Document";
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
    fields: () => Document.fieldsList(),
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
    </v-layout>
  </v-container>
</template>

<style lang="scss" module>
//
</style>
