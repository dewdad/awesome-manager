<script>
import Document from '@/api/models/Document'
import DocumentForm from './DocumentForm'

import exportMixin from '@/mixins/exportMixin'
import crudMixin from '@/mixins/crudMixin'

export default {
  components: {
    DocumentForm
  },
  data() {
    return {
      modelName: 'document'
    }
  },
  mixins: [exportMixin, crudMixin],
  created() {
    window.DocumentIterator = this
  },
  methods: {
    editItem(item) {
      this.$emit('SET_EDITING', item)
      window.DocumentForm.$emit('SET_EDITING', item)
    }
  }
}
</script>

<template>
  <div>
    <h3 class="heading pa-3">{{modelName}}</h3>
    <v-data-iterator
        :items="all"
        row
        wrap
      >
      <v-flex
          slot="item"
          slot-scope="props"
        >
        <v-card
            class="indigo lighten-1"
          >
          <v-card-text>
            <h4 class="white--text pa-1">
              {{ props.item.name }}
            </h4>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </div>
</template>
