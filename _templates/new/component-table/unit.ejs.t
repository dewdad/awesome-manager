---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>Table.spec.ts"
---
<%
  const fileName = h.capitalize(h.inflection.singularize(model)) + 'Table.vue'
  const importName = h.capitalize(h.inflection.singularize(model)) + 'Table'
%>import <%= importName %> from './<%= fileName %>'

describe('@/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= fileName %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent()
  })
})
