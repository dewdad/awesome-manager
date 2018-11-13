---
to: src/router/<%= h.capitalize(h.inflection.singularize(model)) %>.spec.ts
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
  const componentName = h.capitalize(h.inflection.singularize(model)) + "Table.vue"
  const pathName = h.inflection.camelize(h.inflection.singularize(model))
%>import <%= modelName %> from './<%= modelName %>'

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

<%= modelName%>.name = "test";
<%= modelName%>.path = "/test";
(<%= modelName%>.component as any) = Component;

describe('@/router/<%= modelName %>', () => {
  let app
  let mockRoute
  beforeEach(() => {
    mockRoute = <%= modelName %>,
    app = (global as any).createVueRouter([mockRoute])
  })
  it('exports a valid Vue Router', () => {
        const wrapper = (global as any).mount(App, app);
        app.router.push("/test");
        expect(wrapper.find(Component).exists()).toBe(true);
  })
})
