---
to: src/router/<%= h.capitalize(h.inflection.singularize(model)) %>.spec.ts
---
<%
  const fileName = h.capitalize(h.inflection.singularize(model))
  const importName = fileName + "Router"
  const pathName = h.camelize(h.inflection.singularize(model))
  const componentName = "@/components/" + fileName +  "/" + fileName + "Table.vue"
%>import <%= importName %> from "./<%= fileName %>"
import Vuetify from "vuetify";
import App from "@/App.vue";

describe("@/router/<%= fileName %>", () => {
  beforeEach(() => {
    let { router, localVue } = createVueRouter([<%= importName %>]);
    localVue.use(Vuetify);
  })
  it("exports a valid Vue Router Route", () => {
    const wrapper = mount(App, { router, localVue });
    router.push("/<%= pathName %>");
    expect(wrapper.find(<%= componentName %>).exists()).toBe(true);
  })
})
