---
to: src/router/<%= h.capitalize(h.inflection.singularize(model)) %>.spec.ts
---
<%
  const fileName = h.capitalize(h.inflection.singularize(model))
  const importName = fileName + "Router"
  const pathName = h.inflection.camelize(h.inflection.singularize(model))
  const componentName = fileName + "Table"
  const componentPath = "@/components/" + fileName +  "/" + componentName + ".vue"
%>import <%= importName %> from "./<%= fileName %>"
import Vuetify from "vuetify";
import App from "@/App.vue";
import <%= componentName %> from "<%= componentPath %>";

describe("@/router/<%= fileName %>", () => {
  let router
  let localVue
  beforeEach(() => {
    router = createVueRouter([<%= importName %>]).router;
    localVue = createVueRouter([<%= importName %>]).localVue;
    localVue.use(Vuetify);
  })
  it("exports a valid Vue Router Route", () => {
    const wrapper = mount(App, { router, localVue });
    router.push("/<%= pathName %>");
    expect(wrapper.find("<%= componentName %>").exists()).toBe(true);
  })
})
