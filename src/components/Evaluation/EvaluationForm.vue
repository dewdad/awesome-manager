<script>
import Evaluation from "@/api/models/Evaluation";
export default {
  data() {
    return {
      valid: true,
      startDateMenu: false,
      editing: false,
      model: {},
    };
  },
  created() {
    this.model = new Evaluation();
    this.$on("SET_EDITING", item => {
      this.editing = true;
      this.model = item;
    });
    window.EvaluationForm = this;
  },
  computed: {
    modelName: () => Evaluation.entity,
    fields: () => Evaluation.fieldsList(),
  },
  methods: {
    reset() {
      this.editing = false;
      this.model = new Evaluation();
    },
    saveItem() {
      if (!this.editing) {
        Evaluation.insert({
          data: this.model,
        });
        this.model = new Evaluation();
      } else {
        Evaluation.update(this.model);
        this.editing = false;
        this.model = new Evaluation();
      }
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
      <v-toolbar-title class="heading">填写考核评语</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          icon
          @click="reset">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form
          v-model="valid"
          ref="form"
          lazy-validation>
        <v-layout
            row
            wrap>
          <v-flex
              lg12
              sm12>
            <v-text-field
                label="姓名"
                name="name"
                v-model="model.name">
            </v-text-field>
          </v-flex>
          <v-flex
              sm6
              lg6>
            <v-menu
                class="pr-2"
                ref="statDate"
                lazy
                :close-on-content-click="false"
                v-model="startDateMenu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-bottom="-22"
                max-width="290px"
                :return-value.sync="model.date"
              >
              <v-text-field
                  slot="activator"
                  label="考核日期"
                  v-model="model.date"
                  append-icon="event"
                  readonly
              ></v-text-field>
              <v-date-picker
                  v-model="model.date"
                  no-title
                  scrollable>
                <v-spacer></v-spacer>
                <v-btn
                    flat
                    color="primary"
                    @click="startDateMenu = false">取消</v-btn>
                <v-btn
                    flat
                    color="primary"
                    @click="$refs.statDate.save(model.date)">确认</v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex
              lg12
              sm12>
            <v-textarea
                outline
                v-model="model.description"
                name="description"
                label="评语">
            </v-textarea>
          </v-flex>
          <v-spacer></v-spacer>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions class="pb-3">
      <v-spacer></v-spacer>
      <v-btn
        @click="saveItem"
        color="primary">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
