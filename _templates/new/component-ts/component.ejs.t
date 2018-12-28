---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>.tsx"
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
  const modelTableName = h.capitalize(h.inflection.singularize(model)) + "Table"
  const modelFormName = h.capitalize(h.inflection.singularize(model)) + "Form"
%>/**
We use TSX style vue component with vue-tsx-support. 
Install in by running `vue add tsx-support` or `yarn add vue-tsx-support`.
Use it like:
<E left={5} right={3} selectedItem={"item"} onChangeItem={this.changeItem}></E>
Happy hacking!
*/
import * as tsx from "vue-tsx-support";
import { VNode } from "vue";

// Customized events and data interface
interface I<%= modelName %>Events {
  onChangeItem: (value: String) => void
};

interface I<%= modelName %>Data {
  list: String[]
};

// Component Definition
const <%= modelName %> = tsx.componentFactoryOf<I<%=modelName %>Events>().create({
  name: "<%= modelName %>",
  props: {
    left: {
      type: Number,
      required: true as true
    },
    right: {
      type: Number,
      required: true as true
    },
    selectedItem: {
      type: String as () => String,
      required: true as true
    }
  },
  data(): I<%= modelName %>Data {
    return {
      list: ["item1", "item2", "item3"]
    }
  },
  render(): VNode {
    const { list, left, right} = this
    return (
      <div class="wrapper">
        <h2><%= modelName %></h2>
        <div class='list'>
          {list.map(item =>
            <span 
              onClick={() => this.$emit('changeItem', item)}
            >
            {item}
            </span>)
          }
        </div>
      </div>
    )
  }
})

export { <%= modelName %> }
