---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>Form.vue"
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
  const modelTableName = h.capitalize(h.inflection.singularize(model)) + 'Table'
  const modelFormName = h.capitalize(h.inflection.singularize(model)) + 'Form'
%><%
if (blocks.indexOf('script') !== -1) {
%><script>
import <%= modelName %> from "@/api/models/<%= modelName %>";
export default {
  data() {
    return {
      editing: false,
      model: {},
    }
  },
  created() {
    this.model = new <%= modelName %>()
    this.$on("SET_EDITING", (item) => {
      this.editing = true
      this.model = item
    })
    window.<%= modelFormName %> = this;
  },
  computed: {
    fields: () => <%= modelName %>.fieldsList()
  },
  methods: {
    reset() {
      this.editing = false
      this.model = new <%= modelName %>()
    },
    saveItem() {
      if(!this.editing) {
        <%= modelName %>.insert({
          data: this.model
        })
        this.model = new <%= modelName %>()
      } else {
        <%= modelName %>.update(this.model)
        this.editing = false
        this.model = new <%= modelName %>()
      }
      console.log(<%= modelName %>.all())
    }
  }
  <% if (blocks.indexOf('template') === -1) {
  %>render(h) {
    return <div/>
  }<% } %>
}
</script>
<%
}

if (blocks.indexOf('template') !== -1) {
%>
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
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" module>

</style><%
}
%>
