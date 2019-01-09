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

describe('@components/Evaluation/Evaluation', () => {
  it('exports a valid component', () => {
    expect(Evaluation).toBeAComponent()
  })
})
