---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>Table.spec.ts"
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
  const modelTableName = h.capitalize(h.inflection.singularize(model)) + 'Table'
  const modelFormName = h.capitalize(h.inflection.singularize(model)) + 'Form'
%>import <%= modelTableName %> from './<%= modelTableName %>.vue'

describe('@/components/<%= modelName %>/<%= modelTableName %>', () => {
  it('exports a valid component', () => {
    expect(<%= modelTableName %>).toBeAComponent()
  })
})
