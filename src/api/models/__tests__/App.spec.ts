import AppModel from '../App'

describe('@/api/models/App', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new AppModel();

    expect(model.name).toBe("coder");
  })

  it('expect string field', ()=> {
    expect(new AppModel({}).name).toBe("coder");
    expect(new AppModel({ name: "coder" }).name).toBe("coder");
  })

  it('expect to json', ()=> {
    const model = new AppModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      name: "coder"
    };

    expect(json).not.toBeInstanceOf(AppModel);
    expect(json.name).toEqual(expected.name);
  })
})


