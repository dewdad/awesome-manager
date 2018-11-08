---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.capitalize(h.inflection.singularize(model)) %>Form.spec.ts"
---
<%
  const fileName = h.capitalize(h.inflection.singularize(model)) + 'Form.vue'
  const importName = h.capitalize(h.inflection.singularize(model)) + 'Form'
%>import <%= importName %> from './<%= fileName %>'

describe('@/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= fileName %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent()
  })
})
