<script>
import Resummee from "@/api/models/Resummee";
export default {
  data() {
    return {
      editing: false,
      model: {},
    }
  },
  created() {
    this.model = new Resummee()
    this.$on("SET_EDITING", (item) => {
      this.editing = true
      this.model = item
    })
    window.ResummeeForm = this;
  },
  computed: {
    fields: () => Resummee.fieldsList()
  },
  methods: {
    reset() {
      this.editing = false
      this.model = new Resummee()
    },
    saveItem() {
      if(!this.editing) {
        Resummee.insert({
          data: this.model
        })
        this.model = new Resummee()
      } else {
        Resummee.update(this.model)
        this.editing = false
        this.model = new Resummee()
      }
      console.log(Resummee.all())
    }
  }
  
}
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
            color="primary"
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
    </v-layout>
  </v-container>
</template>

<style lang="scss" module>

</style>
