---
to: src/api/models/<%= h.capitalize(h.inflection.singularize(model)) %>.spec.ts
---
<%
  const fileName = h.capitalize(h.inflection.singularize(model))
  const importName = h.capitalize(h.inflection.singularize(model)) + 'Model'
%>import <%= importName %> from './<%= fileName %>'

describe('@/api/models/<%= fileName %>', () => {
  it('exports a valid Vuex ORM Model', () => {
    let model = new <%= importName %>
    expect(model).toBeAModel()
  })
})
