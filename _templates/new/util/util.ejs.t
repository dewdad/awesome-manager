---
to: "src/utils/<%= h.inflection.dasherize(name) %>.ts"
---
<%
  const fileName = h.inflection.dasherize(name)
  const importName = h.inflection.camelize(fileName.replace(/-/g, '_'), true)
%>export default function <%= importName %>() {
  return 'hello'
}
