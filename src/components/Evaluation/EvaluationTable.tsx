/**
We use TSX style vue component with vue-tsx-support. 
Install in by running `vue add tsx-support` or `yarn add vue-tsx-support`.
@example
<div>
  <E selectedItem={"item"} onChangeItem={this.changeItem}></E>
</div>
*/
import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { VCard, VCardText, VResponsive, VCardTitle, VDataTable } from 'vuetify-tsx';

import crudMixin from "@/mixins/crudMixin";

interface IEvaluationEvents {
  onChangeItem: (value: String) => void
};

interface IEvaluationData {
  modelName: String;
};

const EvaluationTable = tsx.componentFactoryOf<IEvaluationEvents>().create({
  name: "Evaluation",
  mixins: [crudMixin],
  props: {
    selectedItem: {
      type: String as () => String,
      required: true as true
    }
  },
  data(): IEvaluationData {
    return {
      modelName: "evaluation",
    }
  },
  methods: {
    onChangeItem(item) {
      console.log(`Log from Evaluation with ${item.name}`);
    },
  },
  render(): VNode {
    const { items, fields } = this
    return (
      <v-card>
        <v-card-title>
          Evaluation Table
        </v-card-title>
        <v-responsive>
          <v-data-table items={items}>
            <tr>{fields.map(field =>
              <th>{field}</th>  
              )}
            </tr>
            {items.map((item: any) => {
              return <tr>
                {Object.keys(item).map(key =>
                <td class="text-xs-left">
                    { item[key] }
                </td>
                )}
              </tr>
              }
            )}
          </v-data-table>
        </v-responsive>
      </v-card>
    )
  }
})

export { EvaluationTable }
