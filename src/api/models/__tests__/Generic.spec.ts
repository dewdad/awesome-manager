import GenericModel from '../Generic'

describe('@/api/models/Generic', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new GenericModel();

    expect(model.name).toBe("name");
  })

  it('expect string field', ()=> {
    expect(new GenericModel({}).name).toBe("name");
    expect(new GenericModel({ name: "name" }).name).toBe("name");
  })

  it('expect to json', ()=> {
    const model = new GenericModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      name: "name"
    };

    expect(json).not.toBeInstanceOf(GenericModel);
    expect(json.name).toEqual(expected.name);
  })
})


