<script>
import Entity from "@/api/models/Entity";
import EntityForm from "./EntityForm";
export default {
  components: {
    EntityForm,
  },
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    all: () => Entity.all(),
    headers: () => Entity.fieldsList(),
  },
  created() {
    window.EntityTable = this;
  },
  methods: {
    deleteItem(item) {
      Entity.delete(item._id);
    },
    editItem(item) {
      window.EntityForm.$emit("SET_EDITING", item);
    },
  },
};
</script>

<template>
  <v-card>
    <v-card-title>
      EntityTable
    </v-card-title>
    <v-responsive>
      <v-data-table
          :headers="headers"
          :items="all"
          hide-actions
          class="elevation-0"
        >
        <template
            slot="headers"
            slot-scope="props">
          <tr>
            <th
                v-for="header in props.headers"
                class="text-xs-left"
                :key="header">
              {{ $t !== undefined ? $t(header) : header }}
            </th>
          </tr>
        </template>
        <template
            slot="items"
            slot-scope="props">
          <td
              class="text-xs-left"
              :key="header"
              :autocomplete="props.item[header]"
              v-for="header in headers">
            {{ props.item[header] }}
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
    <v-responsive>
      <EntityForm></EntityForm>
    </v-responsive>
  </v-card>
</template>

<style lang="scss" module>
</style>
