---
to: "src/components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.inflection.dasherize(name) %>.unit.js"
---
<%
  const fileName =
    (h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '') +
    h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'))
%>import <%= importName %> from './<%= fileName %>'

describe('@components/<%= h.capitalize(h.inflection.singularize(model)) %>/<%= fileName %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent()
  })
})
