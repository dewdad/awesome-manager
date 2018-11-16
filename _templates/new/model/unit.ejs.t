---
to: src/api/models/__tests__/<%= h.capitalize(h.inflection.singularize(model)) %>.spec.ts
---
<%
  const fileName = h.capitalize(h.inflection.singularize(model))
  const importName = h.capitalize(h.inflection.singularize(model)) + 'Model'
%>import <%= importName %> from './<%= fileName %>'

describe('@/api/models/<%= fileName %>', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new <%= importName%>();

    expect(model.name).toBe("xingwenju");
  })

  it('expect string field', ()=> {
    expect(new <%= importName%>({}).name).toBe("xingwenju");
    expect(new <%= importName%>({ name: "xingwenju" }).name).toBe("xingwenju");
    expect(new <%= importName%>({ name: 1 }).name).toBe("1");
    expect(new <%= importName%>({ name: true }).name).toBe("true");
    expect(new <%= importName%>({ name: null }).name).toBe("null");
  })

  it('expect to json', ()=> {
    const model = new <%= importName%>();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      name: "xingwenju"
    };

    expect(json).not.toBeInstanceOf(<%= importName%>);
    expect(json).toEqual(expected);
  })
})


