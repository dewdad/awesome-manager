<script>
export default {
  components: {
  },
  props: {
    editing: false
  },
  data() {
    return {
    }
  },
  computed: {
    ...sync("User/*"),
  },
  methods: {
    ...call("User/*"),
    saveItem() {
      if (this.editing) {
        // this.updateItem(this.currentItem);
      } else {
        // this.$store.set("User/currentItem@id", "");
        // this.createItem(this.currentItem);
      }
    }
  },
  
}
</script>

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

<style lang="scss" module>
@import '@design';
</style>
