<script>
import Test from "@/api/models/Test";
import TestForm from "./TestForm";
export default {
  components: {
    TestForm,
  },
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    all: () => Test.all(),
    headers: () => Test.fieldsList(),
  },
  created() {
    window.TestApp = this;
  },
  methods: {
    deleteItem(item) {
      Test.delete(item._id);
    },
    editItem(item) {
      window.TestForm.$emit("SET_EDITING", item);
    },
  },
};
</script>

<template>
  <v-card>
    <v-card-title> TestTable </v-card-title>
    <v-responsive>
      <v-data-table
          :headers="headers"
          :items="all"
          class="elevation-0">
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
              v-for="header in headers"
            >
            {{ props.item[header] }}
          </td>
          <td class="justify-center layout px-0">
            <v-btn
                icon
                class="mx-0"
                @click="editItem(props.item);">
              <v-icon color="teal">edit</v-icon>
            </v-btn>
            <v-btn
                icon
                class="mx-0"
                @click="deleteItem(props.item);">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </td>
        </template>
      </v-data-table>
    </v-responsive>
    <v-responsive> </v-responsive>
  </v-card>
</template>

<style lang="scss" module>
</style>
