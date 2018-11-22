import SocialModel from '../Social'

describe('@/api/models/Social', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new SocialModel();

    expect(model.title).toBe("100+");
  })

  it('expect string field', ()=> {
    expect(new SocialModel({}).title).toBe("100+");
    expect(new SocialModel({ title: "100+" }).title).toBe("100+");
  })

  it('expect to json', ()=> {
    const model = new SocialModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      title: "100+"
    };

    expect(json).not.toBeInstanceOf(SocialModel);
    expect(json.title).toEqual(expected.title);
  })
})


