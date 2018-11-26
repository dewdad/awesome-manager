<template>
  <v-card>
    <v-card-title> Activity </v-card-title>
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
              {{ $t(header) }}
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
    <v-responsive>
      <ActivityForm></ActivityForm>
    </v-responsive>
  </v-card>
</template>
<script lang="js">
import { cloneDeep } from 'lodash';
import Activity from "@/api/models/Activity";
import ActivityForm from "./ActivityForm";

export default {
  components: {
    ActivityForm
  },
  data() {
    return {
      editing: false,
    }
  },
  computed: {
    all: () => Activity.all(),
    headers: () => Activity.fieldsList()
  },
  created() {
    window.activityTable = this;
  },
  methods: {
    deleteItem(item) {
      Activity.delete(item._id)
    },
    editItem(item) {
      window.activityForm.$emit("SET_EDITING", item)
    }
  }
}
</script>
