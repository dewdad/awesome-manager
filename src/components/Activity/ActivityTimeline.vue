<script>
import Activity from "@/api/models/Activity";
import exportMixin from "@/mixins/exportMixin";
export default {
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    modelName: () => Activity.entity,
    all: () =>
      Activity.query()
        .withAll()
        .get(),
    headers: () => Activity.fieldsList(),
  },
  mixins: [exportMixin],
  created() {
    window.ActivityTimeline = this;
  },
  methods: {
    deleteItem(item) {
      Activity.delete(item._id);
    },
    editItem(item) {
      window.ActivityForm.$emit("SET_EDITING", item);
    },
  },
};
</script>

<template>
  <v-card
      class="mt-45"
    >
    <v-card-text>
      <v-timeline>
        <v-timeline-item
            v-for="(item, i) in all"
            color="primary"
            :key="i"
            small
          >
          <span
              :class="`headline font-weight-bold blue--text`"
              v-text="item.occurenceDate"
          ></span>
          <div class="py-3">
            <h2 :class="`headline font-weight-light mb-3 black--text`">{{ item.content }}</h2>
            <div>
              {{ item.instruction }}
            </div>
            <v-btn
                icon
                class="mx-0"
                @click="deleteItem(item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<style lang="stylus" scoped>
  .mt-45
    margin-left: 45px
    margin-right: 45px
</style>
