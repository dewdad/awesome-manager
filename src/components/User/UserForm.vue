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
    },
    militantInformation() {
      this.$router.push("/users/militant");
    },
    resummeeInformation() {
      this.$router.push("/users/resummee");
    },
    writeEvaluation() {
      this.$router.push("/users/evaluation");
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
      <v-toolbar-title class="headline">{{editing ? "你在进行编辑更新" : "你在添加模式"}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          icon
          @click="reset">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-layout
            row
            wrap>
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
          <v-flex
              lg6
              sm6>
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
      </v-form>
    </v-card-text>
    <v-card-actions class="pb-3">
      <v-spacer></v-spacer>
      <v-btn
          :color="editing ? 'warning' : 'primary'"
          @click="saveItem">{{editing ? "更新": "添加"}}信息</v-btn>
      <v-btn
          :color="editing ? 'warning' : 'primary'"
          @click="militantInformation">党员信息</v-btn>
      <v-btn
          :color="editing ? 'warning' : 'primary'"
          @click="resummeeInformation">填写简历</v-btn>
      <v-btn
          :color="editing ? 'warning' : 'primary'"
          @click="writeEvaluation">进行考核</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" module>
.headline {
  padding: 20px;
}
</style>
