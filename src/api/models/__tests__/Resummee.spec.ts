import ResummeeModel from '../Resummee'

describe('@/api/models/Resummee', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new ResummeeModel();

    expect(model.name).toBe("Nodoby");
  })

  it('expect string field', ()=> {
    expect(new ResummeeModel({}).name).toBe("Nodoby");
    expect(new ResummeeModel({ name: "Nodoby" }).name).toBe("Nodoby");
  })

  it('expect to json', ()=> {
    const model = new ResummeeModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      name: "Nodoby"
    };

    expect(json).not.toBeInstanceOf(ResummeeModel);
    expect(json.name).toEqual(expected.name);
  })
})


