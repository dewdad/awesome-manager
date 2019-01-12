<template>
  <div>
    <v-data-iterator
        :items="entities"
        row
        wrap
      >
      <v-flex
          slot="item"
          slot-scope="props"
        >
        <v-chip
            @click="select(props.item)"
            :color="selectedColor"
            outline
            close
          >
          {{ props.item }}
        </v-chip>
      </v-flex>
    </v-data-iterator>
  </div>
</template>
<script>
import { entities } from "@/api/globals";
export default {
  data() {
    return {
      entities: [],
      selectedColor: "green",
    };
  },
  methods: {
    select(item) {
      window.dbApp.$emit("SELECT_MODEL", item);
    },
  },
  created() {
    this.entities = entities;
  },
};
</script>
