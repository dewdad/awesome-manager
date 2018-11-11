<template>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex
          @click="reset"
          xs12
          md12
          sm12>
        <h2>{{ editing ? "你在进行编辑更新" : "你在添加模式" }}</h2>
      </v-flex>
      <v-text-field
          v-for="field in fields"
          v-model="model[field]"
          :key="field"
          :label="$t(field)">
      </v-text-field>
      <v-btn
          color="primary"
          @click="saveItem">{{ editing ? "更新" : "添加" }}</v-btn>
    </v-layout>
  </v-container>
</template>
<script lang="js">
import Activity from "@/api/models/Activity";
export default {
  data() {
    return {
      editing: false,
      model: {},
    }
  },
  created() {
    this.model = new Activity()
    this.$on("SET_EDITING", (item) => {
      this.editing = true
      this.model = item
    })
    window.activityForm = this;
  },
  computed: {
    fields: () => Activity.fieldsList()
  },
  methods: {
    reset() {
      this.editing = false
      this.model = new Activity()
    },
    saveItem() {
      if(!this.editing) {
        Activity.insert({
          data: this.model
        })
        this.model = new Activity()
      } else {
        Activity.update(this.model)
        this.editing = false
        this.model = new Activity()
      }
      console.log(Activity.all())
    }
  }
}
</script>
