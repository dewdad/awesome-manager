/**
We use TSX style vue component with vue-tsx-support.
Install in by running `vue add tsx-support` or `yarn add vue-tsx-support`.
Use it like:
<E left={5} right={3} selectedItem={"item"} onChangeItem={this.changeItem}></E>
Happy hacking!
*/
import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

import crudMixin from "@/mixins/crudMixin";

// Customized events and data interface
interface IEvaluationEvents {
  onChangeItem: (value: String) => void;
}

interface IEvaluationData {
  modelName: String;
}

// Component Definition
const Evaluation = tsx.componentFactoryOf<IEvaluationEvents>().create({
  name: "Evaluation",
  mixins: [crudMixin],
  props: {
    left: {
      type: Number,
      required: true as true,
    },
    right: {
      type: Number,
      required: true as true,
    },
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
      console.log(`Log from Evaluation with ${item}`);
    },
  },
  render(): VNode {
    const { items } = this;
    return <div class="wrapper">
        <h2>Evaluation</h2>
        <div class="list">
          {items.map(item => <p onClick={() => {
                // Evaluation Component
                this.onChangeItem(item.description);
                // App Component
                this.$emit("changeItem", item.description);
              }}>
              {item.name}
            </p>)}
          <br />
        </div>
      </div>;
  },
});

export { Evaluation };
