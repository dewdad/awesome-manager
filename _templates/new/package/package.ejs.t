---
inject: true
to: package.json
after: dependencies
# skip_if: vue
---
<% 
packages.split(",").map(p => {
%>    "<%= p %>": "*",
<% 
})
%>
