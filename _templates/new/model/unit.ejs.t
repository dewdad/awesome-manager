---
to: src/api/models/<%= h.inflection.dasherize(name) %>.unit.js
---
<%
  const fileName = h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'), true) + 'Module'
%>import <%= importName %> from './<%= fileName %>'

describe('@api/models/<%= fileName %>', () => {
  it('exports a valid Vuex ORM Model', () => {
    expect(<%= importName %>).toBeAVuexORMModel()
  })
})
