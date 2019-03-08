---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>.spec.ts"
---
<%
  const modelName = h.capitalize(h.inflection.singularize(model))
%>import { <%= modelName %> } from './<%= modelName %>'

describe('@components/<%= modelName %>/<%= modelName %>', () => {
  it('exports a valid component', () => {
    expect(<%= modelName %>).toBeAComponent()
  })
})
