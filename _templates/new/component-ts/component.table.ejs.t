---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>Table.tsx"
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
  const modelTableName = h.capitalize(h.inflection.singularize(model)) + "Table"
  const modelFormName = h.capitalize(h.inflection.singularize(model)) + "Form"
%>/**
We use TSX style vue component with vue-tsx-support. 
Install in by running `vue add tsx-support` or `yarn add vue-tsx-support`.
@example
<div>
  <E selectedItem={"item"} onChangeItem={this.changeItem}></E>
</div>
*/
import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

import crudMixin from "@/mixins/crudMixin";

interface I<%= modelName %>Events {
  onChangeItem: (value: String) => void
};

interface I<%= modelName %>Data {
  modelName: String;
};

const <%= modelTableName %> = tsx.componentFactoryOf<I<%=modelName %>Events>().create({
  name: "<%= modelName %>",
  mixins: [crudMixin],
  props: {
    selectedItem: {
      type: String as () => String,
      required: true as true
    }
  },
  data(): I<%= modelName %>Data {
    return {
      modelName: "<%= modelName.toLowerCase() %>",
    }
  },
  methods: {
    onChangeItem(item) {
      console.log(`Log from <%= modelName %> with ${item.name}`);
    },
  },
  render(): VNode {
    const { items, headers } = this
    return (
      <v-card>
        <v-responsive>
          <v-data-table
              headers={headers}
              items={items}
              class="elevation-0"
            >
              {items.map((item: any) => {
                  {Object.keys(item).map(key =>
                    <td
                        class="text-xs-left"
                        key={key}>
                      { item[key] }
                    </td>
                    )}
                  }
                )}
          </v-data-table>
        </v-responsive>
      </v-card>
    )
  }
})

export { <%= modelTableName %> }
