import * as tsx from "vue-tsx-support";
import { VNode } from "vue";
import { Evaluation } from "@/components/Evaluation/Evaluation.tsx";
import { EvaluationTable } from "@/components/Evaluation/EvaluationTable.tsx";


// Customized events and data interface
interface IAppEvents {
  changeItem: (value: String) => void;
}

interface IAppData {
  selectedItem: string;
}

// Component Definition
const App = tsx.componentFactoryOf<IAppEvents>().create({
  name: "App",
  components: {
    Evaluation,
    EvaluationTable
  },
  data(): IAppData {
    return {
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
      <v-content>
        <EvaluationTable selectedItem={""}/>
      </v-content>
    );
  },
});
export { App };
