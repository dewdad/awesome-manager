<script>
import { join } from 'path'
import { map, pick, pullAll } from 'lodash/fp'

import User from '@/api/models/User'
import Entity from '@/api/models/Entity'

import crudMixin from '@/mixins/crudMixin'
import exportMixin from '@/mixins/exportMixin'

export default {
  data() {
    return {
      editing: false,
      mini: false,
      model: {},
      modelName: 'user'
    }
  },
  mixins: [crudMixin,exportMixin],
  created() {
    window.UserForm = this
  },
  computed: {
    selectEntities: () => map(pick(['_id', 'name']), Entity.all()),
    computeCardLayout() {
      return this.mini ? 'row' : 'column'
    },
    computeTextAlgin() {
      return this.mini ? 'text-sm-right' : 'text-sm-center'
    },
    computeAvatarSize() {
      return this.mini ? '48' : '192'
    },
    computeAvatarMan1: () => join(process.env.BASE_URL, 'avatar/man_1.jpg')
  }
}
</script>

<template>
  <v-card>
    <v-toolbar
        card
        prominent
        extended
        color="primary"
        dark="">
      <v-spacer></v-spacer>
      <v-toolbar-title>{{editing ? "你在进行编辑更新" : "你在添加模式"}}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-layout
            row
            wrap>
          <v-flex
              v-for="field in nonRelationFields"
              :key="field"
              lg6
              sm6>
            <v-text-field
                v-model="model[field]"
                :label=" tryT(field) ">
            </v-text-field>
          </v-flex>
          <v-flex
              lg6
              sm6>
            <v-select
                v-for="relationField in relationFieldsWithId"
                v-model="model[relationField]"
                :key="relationField"
                :label=" tryT(relationField) "
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
          @click="saveItem(model)">{{editing ? "更新": "添加"}}信息</v-btn>
      <v-btn
          flat
          @click.native="exportItem(model)">导出数据</v-btn>
      <v-btn
          flat
          @click.native="mergeWordApp">合并打印</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" module>
.headline {
  padding: 20px;
}
.mt-15 {
  padding-top: 15px;
  margin-top: 15px;
}
.mt-56 {
  margin-top: 56px;
}
</style>
