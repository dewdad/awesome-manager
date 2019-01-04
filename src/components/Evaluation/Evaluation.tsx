/**
We use TSX style vue component with vue-tsx-support.
Install in by running `vue add tsx-support` or `yarn add vue-tsx-support`.
Use it like:
<E left={5} right={3} selectedItem={"item"} onChangeItem={this.changeItem}></E>
Happy hacking!
*/
import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

// Customized events and data interface
interface IEvaluationEvents {
  onChangeItem: (value: String) => void;
}

interface IEvaluationData {
  list: String[];
}

// Component Definition
const Evaluation = tsx.componentFactoryOf<IEvaluationEvents>().create({
  name: "Evaluation",
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
      list: ["item1", "item2", "item3"],
    };
  },
  render(): VNode {
    const { list, left, right } = this;
    return (
      <div class="wrapper">
        <h2>Evaluation</h2>
        <div class="list">
          {list.map(item => (
            <span onClick={() => this.$emit("changeItem", item)}>{item}</span>
          ))}
        </div>
      </div>
    );
  },
});

export { Evaluation };
