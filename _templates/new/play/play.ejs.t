---
to: lib/util/play.js
---
<%
%>

// model name
<%= model %>

// fields
<%= fieldName %>
<%= fieldType %>
<%= fieldValue %>

// more fields
<% fieldNames.split(",").map((f)=>{ 
%>
<%= f %>
<% }) %>
