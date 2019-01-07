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
      startDateMenu: false,
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
  <v-card>
    <v-toolbar
        card
        prominent
        extended
        color="primary"
        dark="">
      <v-toolbar-title class="headline">请输入文函信息</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title :class="editing ? 'yellow--text' : 'white--text'">
        {{editing ? "你在进行编辑更新" : "你在添加模式"}}
      </v-toolbar-title>
      <v-btn
          icon
          @click="reset">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-layout wrap>
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
                :return-value.sync="model['startDate']"
              >
              <v-text-field
                  slot="activator"
                  :label="$t('startDate')"
                  v-model="model['startDate']"
                  append-icon="event"
                  readonly
              ></v-text-field>
              <v-date-picker
                  v-model="model['startDate']"
                  no-title
                  scrollable>
                <v-spacer></v-spacer>
                <v-btn
                    flat
                    color="primary"
                    @click="startDateMenu = false">Cancel</v-btn>
                <v-btn
                    flat
                    color="primary"
                    @click="$refs.statDate.save(model['startDate'])">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex
              lg6
              sm6>
            <v-text-field
                v-model="model['type']"
                name="type"
                key="type"
                :label=" $t !== undefined ? $t('type') : 'type'">
            </v-text-field>
          </v-flex>
          <v-flex
              lg6
              sm6>
            <v-text-field
                v-model="model['mark']"
                name="mark"
                key="mark"
                :label=" $t !== undefined ? $t('mark') : 'mark'">
            </v-text-field>
          </v-flex>
          <v-flex
              lg6
              sm6>
            <v-text-field
                v-model="model['classification']"
                name="classification"
                key="classification"
                :label=" $t !== undefined ? $t('classification') : 'classification'">
            </v-text-field>
          </v-flex>
          <v-flex
              lg12
              sm12>
            <v-text-field
                v-model="model['title']"
                name="title"
                key="title"
                :label=" $t !== undefined ? $t('title') : 'title'">
            </v-text-field>
          </v-flex>
          <v-flex
              lg12
              sm12>
            <v-text-field
                v-model="model['text']"
                name="text"
                key="text"
                :label=" $t !== undefined ? $t('text') : 'text'">
            </v-text-field>
          </v-flex>
          <v-flex
              lg12
              sm12>
            <v-text-field
                v-model="model['attachment']"
                name="attachment"
                key="attachment"
                :label=" $t !== undefined ? $t('attachment') : 'attachment'">
            </v-text-field>
          </v-flex>
          <v-flex
              v-for="relationField in relationFields"
              v-if="relationField !== 'author_id'"
              :key="relationField"
              lg6
              sm6>
            <v-select
                v-model="model[relationField]"
                :label=" $t(relationField) "
                :items="selectEntities"
                item-text="name"
                item-value="_id">
            </v-select>
          </v-flex>
          <v-flex
              lg6
              sm6>
            <v-select
                v-model="model['author_id']"
                key="author_id"
                :label=" $t('author_id') "
                :items="selectUsers"
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
          @click="saveItem">{{editing ? "更新": "添加"}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
