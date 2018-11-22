import LocationModel from '../Location'

describe('@/api/models/Location', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new LocationModel();

    expect(model.latitude).toBe("none");
  })

  it('expect string field', ()=> {
    expect(new LocationModel({}).latitude).toBe("none");
    expect(new LocationModel({ latitude: "none" }).latitude).toBe("none");
  })

  it('expect to json', ()=> {
    const model = new LocationModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      latitude: "none"
    };

    expect(json).not.toBeInstanceOf(LocationModel);
    expect(json.latitude).toEqual(expected.latitude);
  })
})


