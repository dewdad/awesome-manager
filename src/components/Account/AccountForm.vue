<script>
import Account from '@/api/models/Account'
import AccountProfile from './AccountProfile.vue'
export default {
  components: { AccountProfile },
  data() {
    return {
      editing: false,
      model: {}
    }
  },
  created() {
    this.model = new Account()
    this.$on('SET_EDITING', item => {
      this.editing = true
      this.model = item
    })
    window.AccountForm = this
  },
  computed: {
    fields: () => Account.fieldsKeys()
  },
  methods: {
    reset() {
      this.editing = false
      this.model = new Account()
    },
    saveItem() {
      if (!this.editing) {
        Account.insert({
          data: this.model
        })
        this.model = new Account()
      } else {
        Account.update(this.model)
        this.editing = false
        this.model = new Account()
      }
    }
  }
}
</script>

<template>
  <v-card>
    <AccountProfile></AccountProfile>
    <v-toolbar
        card
        prominent
        extended
        color="primary"
        dark="">
      <v-toolbar-title class="headline">
        {{editing ? "你在进行编辑更新" : "你在添加模式"}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
          icon
          @click="reset">
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-layout wrap>
          <v-flex
              v-for="field in fields"
              :key="field"
              lg6
              sm6>
            <v-text-field
                v-model="model[field]"
                :name="field"
                :label=" $t !== undefined ? $t(field) : field">
            </v-text-field>
          </v-flex>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions class="pb-3">
      <v-spacer></v-spacer>
      <v-btn
          :color="editing ? 'warning' : 'primary'"
          @click="saveItem">{{editing ? "更新": "添加"}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<style lang="scss" module>
</style>
