---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.inflection.dasherize(name) %>.vue"
---
<%
if (blocks.indexOf('script') !== -1) {
%><script>
export default {
  name: "<%= h.inflection.dasherize(name) %>",
  components: {
  },
  props: {
    editing: false
  },
  data() {
    return {
      //
    }
  },
  computed: {
    // ...sync("<%= h.inflection.pluralize(model) %>/*"),
  },
  methods: {
    // ...call("<%= h.inflection.pluralize(model) %>/*"),
    saveItem() {
      if (this.editing) {
        // this.actionUpdate(this.currentItem);
      } else {
        // this.$store.set("activity/currentItem@id", "");
        // this.actionCreate(this.currentItem);
      }
    }
  },
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
          @click=" editing = !editing"
          xs12
          md12
          sm12>
        {{editing ? "你在进行编辑更新" : "你在添加模式"}}
      </v-flex>
      <v-text-field
          v-for="(v, k) of currentItem"
          v-if="k !== 'id'"
          v-model="currentItem[k]"
          :key="k"
          :label=" $t !== undefined ? $t(k) : k">
      </v-text-field>
      <v-btn
          color="primary"
          @click="saveItem">{{editing ? "更新": "添加"}}</v-btn>
    </v-layout>
  </v-container>
</template>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" module>
@import '@design';
</style><%
}
%>
