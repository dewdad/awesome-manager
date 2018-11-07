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
  data() {
    return {
      editing: false,
    }
  },
  computed: {
    // ...get("<%= h.inflection.pluralize(model) %>/*"),
  },
  created() {
    this.$on("INFO_CLOSE", () => {
      this.editing = false;
    });
    window.<%= h.inflection.pluralize(model) %>App = this;
  },
  methods: {
    ...call("<%= h.inflection.pluralize(model) %>/*"),
    deleteItem(item) {
      // deleting methods
    },
    editItem(item) {
      this.editing = true;
      // editing methods
    },
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
  <v-card>
    <v-card-title>
      <%= h.inflection.pluralize(model) %>
    </v-card-title>
    <v-responsive>
      <v-data-table
          :headers="itemKeysFiltered"
          :items="itemFiltered"
          hide-actions
          class="elevation-0"
        >
        <template
            slot="headers"
            slot-scope="props">
          <tr>
            <th
                v-for="header in props.headers"
                v-if="header.text !== 'id'"
                class="text-xs-left"
                :key="header.text">
              {{ $t !== undefined ? $t(header.text) : header.text }}
            </th>
          </tr>
        </template>
        <template
            slot="items"
            slot-scope="props">
          <td
              class="text-xs-left"
              :key="header.text"
              :autocomplete="props.item[header.text]"
              v-if="header.text !== 'id'"
              v-for="header in itemKeysFiltered">
            {{ props.item[header.text] }}
          </td>
          <td class="justify-center layout px-0">
            <v-btn
                icon
                class="mx-0"
                @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn
                icon
                class="mx-0"
                @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>

    </v-responsive>
  </v-card>
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
