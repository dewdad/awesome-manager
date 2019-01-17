<script>
import Resummee from "@/api/models/Resummee";
export default {
  data() {
    return {
      editing: false,
      model: {},
    };
  },
  created() {
    this.model = new Resummee();
    this.$on("SET_EDITING", item => {
      this.editing = true;
      this.model = item;
    });
    window.ResummeeForm = this;
  },
  computed: {
    fields: () => Resummee.fieldsKeys(),
  },
  methods: {
    reset() {
      this.editing = false;
      this.model = new Resummee();
    },
    saveItem() {
      if (!this.editing) {
        Resummee.insert({
          data: this.model,
        });
        this.model = new Resummee();
      } else {
        Resummee.update(this.model);
        this.editing = false;
        this.model = new Resummee();
      }
      console.log(Resummee.all());
    },
  },
};
</script>

<template>
  <v-card>
    <v-toolbar
        card
        prominent
        extended
        color="primary"
        dark="">
      <v-toolbar-title class="headline">
        {{editing ? "你在进行编辑更新" : "你在添加模式"}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          icon
          @click="reset">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-layout wrap>
        <v-flex
            v-for="field in fields"
            :key="field"
            lg6
            sm6>
          <v-text-field
              v-model="model[field]"
              :label=" $t !== undefined ? $t(field) : field">
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          color="primary"
          @click="saveItem">{{editing ? "更新": "添加"}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" module>
</style>
