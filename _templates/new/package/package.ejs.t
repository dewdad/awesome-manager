---
inject: true
to: package.json
after: dependencies
# skip_if: vue
---
<% 
if(packages.indexOf("vue") !== -1) packages[0]
%>    "vue": "^2.5.17",
<% 
if(packages.indexOf("vue-router")!== -1) packages[1]
%>    "vue-router": "^3.0.1",
<%
if(packages.indexOf("vuex")!== -1) packages[2]
%>    "vuex": "^3.0.1",
