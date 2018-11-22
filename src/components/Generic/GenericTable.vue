<script>
import Generic from "@/api/models/Generic";
import GenericForm from "./GenericForm";
export default {
  components: {
    GenericForm
  },
  data() {
    return {
      editing: false,
    }
  },
  computed: {
    all: ()=>Generic.all(),
    headers: ()=>Generic.fieldsList(),
  },
  created() {
    window.GenericApp = this;
  },
  methods: {
    deleteItem(item) {
      Generic.delete(item._id)
    },
    editItem(item) {
      window.GenericForm.$emit("SET_EDITING", item)
    }
  },
  
}
</script>

<template>
  <v-card>
    <v-card-title>
      GenericTable
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
      <GenericForm></GenericForm>
    </v-responsive>
  </v-card>
</template>

<style lang="scss" module>

</style>
