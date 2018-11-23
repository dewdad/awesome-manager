/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import MyButton from "../components/base/MyButton.vue";
import RxCounter from "../components/widgets/RxCounter.vue";

storiesOf("Button", module).add("with text", () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action("clicked") },
}));
storiesOf("Button", module).add("with other text", () => ({
  components: { MyButton },
  template: '<my-button @click="action">RX Button</my-button>',
  methods: { action: action("Rx clicked") },
}));
storiesOf("Counter", module).add("Rx Counter", () => ({
  components: { RxCounter },
  template: "<rx-counter></rx-counter>",
  methods: { action: action("count$") },
}));
// .add("with JSX", () => ({
//   components: { MyButton },
//   render() {
//     return <my-button onClick={this.action}>With JSX</my-button>;
//   },
//   methods: { action: linkTo("Button", "with some emoji") },
// }))
// .add("with some emoji", () => ({
//   components: { MyButton },
//   template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//   methods: { action: action("clicked") },
// }));
