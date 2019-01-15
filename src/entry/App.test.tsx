import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { pullAll } from "lodash";

import { Evaluation } from "@/components/Evaluation/Evaluation.tsx";


// Customized events and data interface
interface IAppEvents {
  changeItem: (value: String) => void;
}

interface IAppData {
  list: string[];
  selectedItem: string;
}

// Component Definition
const App = tsx.componentFactoryOf<IAppEvents>().create({
  name: "App",
  components: {
    Evaluation,
  },
  data(): IAppData {
    return {
      list: ["item1", "item2", "item3"],
      selectedItem: "",
    };
  },
  created() {
    (window as any).getApp = this;
  },
  methods: {
    changeItem: function(value: string) {
      console.log(`Log from App with event from Evaluation: ${value}`);
      this.selectedItem = value;
    },
  },
  render(): VNode {
    return (
      <div id="appRoot">
        <Evaluation
          left={5}
          right={10}
          selectedItem={(this as any).selectedItem}
          onChangeItem={(this as any).changeItem}
        />
      </div>
    );
  },
});
export { App };
