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
import { VCard, VCardTitle } from "vuetify-tsx";

import crudMixin from "@/mixins/crudMixin";

interface IEvaluationEvents {
  onChangeItem: (value: String) => void;
}

interface IEvaluationData {
  modelName: String;
}

const EvaluationTable = tsx.componentFactoryOf<IEvaluationEvents>().create({
  name: "Evaluation",
  mixins: [crudMixin],
  props: {
    selectedItem: {
      type: String as () => String,
      required: true as true,
    },
  },
  data(): IEvaluationData {
    return {
      modelName: "evaluation",
    };
  },
  methods: {
    onChangeItem(item) {
      console.log(`Log from Evaluation with ${item.name}`);
    },
  },
  render(): VNode {
    const { items, fields } = this;
    return (
      <VCard>
        <VCardTitle>Evaluation Table</VCardTitle>
      </VCard>
    );
  },
});

export { EvaluationTable };
