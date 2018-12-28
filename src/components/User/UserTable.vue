<script>
import User from "@/api/models/User";
import UserForm from "./UserForm";
import { join } from "path";
import { pullAll } from "lodash";
import { remote, shell } from "electron";
export default {
  components: {
    UserForm,
  },
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    all: () =>
      User.query()
        .withAll()
        .get(),
    headers: () => pullAll(User.fieldsList(), User.relationFieldsList()),
  },
  created() {
    window.UserApp = this;
  },
  methods: {
    deleteItem(item) {
      User.delete(item._id);
    },
    editItem(item) {
      window.UserForm.$emit("SET_EDITING", item);
    },
    exportItem(item) {
      let filePath = join(remote.app.getPath("home"), "/Documents/template/db.csv");
      GenerateCSV([item], filePath);
      shell.showItemInFolder(filePath);
    },
  },
};
</script>

<template>
  <v-card>
    <v-responsive>
      <v-data-table
          :headers="headers"
          :items="all"
          class="elevation-0"
        >
        <template
            slot="headers"
            slot-scope="props">
          <tr>
            <th
                class="text-xs-left"
                key="action">
              {{ $t('action') }}
            </th>
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
            <v-btn
                icon
                class="mx-0"
                @click="exportItem(props.item)">
              <v-icon color="pink">fas fa-print</v-icon>
            </v-btn>
          </td>
          <td
              class="text-xs-left"
              :key="header"
              :autocomplete="props.item[header]"
              v-for="header in headers">
            {{ props.item[header] }}
          </td>
        </template>
      </v-data-table>

    </v-responsive>
    <UserForm></UserForm>
    <v-responsive>
    </v-responsive>
  </v-card>
</template>

<style lang="scss" module>
</style>
