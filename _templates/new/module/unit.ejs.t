---
to: src/store/modules/__tests__/<%= h.inflection.dasherize(name) %>.spec.ts
---
<%
  const fileName = h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'), true) + 'Module'
%>import * as <%= importName %> from './<%= fileName %>'

describe('@state/modules/<%= fileName %>', () => {
  it('exports a valid Vuex module', () => {
    expect(<%= importName %>).toBeAVuexModule()
  })
})
