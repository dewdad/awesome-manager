import GenericModel from '../Generic'

describe('@/api/models/Generic', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new GenericModel();

    expect(model.name).toBe("China");
  })

  it('expect string field', ()=> {
    expect(new GenericModel({}).name).toBe("China");
    expect(new GenericModel({ name: "China" }).name).toBe("China");
  })

  it('expect to json', ()=> {
    const model = new GenericModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      name: "China"
    };

    expect(json).not.toBeInstanceOf(GenericModel);
    expect(json.name).toEqual(expected.name);
  })
})


