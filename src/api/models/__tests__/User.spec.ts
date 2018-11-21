import UserModel from '../User'

describe('@/api/models/User', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new UserModel();

    expect(model.name).toBe("Xing Wenju");
  })

  it('expect string field', ()=> {
    expect(new UserModel({}).name).toBe("Xing Wenju");
    expect(new UserModel({ name: "Xing Wenju" }).name).toBe("Xing Wenju");
  })

  it('expect to json', ()=> {
    const model = new UserModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      name: "Xing Wenju"
    };

    expect(json).not.toBeInstanceOf(UserModel);
    expect(json.name).toEqual(expected.name);
  })
})


