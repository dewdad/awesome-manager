import MonthVisitModel from '../MonthVisit'

describe('@/api/models/Monthvisit', () => {
  it('exports a valid Vuex ORM Model', () => {

    const model = new MonthVisitModel();

    expect(model.month).toBe("Jan");
  })

  it('expect string field', ()=> {
    expect(new MonthVisitModel({}).month).toBe("Jan");
    expect(new MonthVisitModel({ month: "Jan" }).month).toBe("Jan");
  })

  it('expect to json', ()=> {
    const model = new MonthVisitModel();
    const json = model.$toJson();

    const expected = {
      _id: 1,
      month: "Jan"
    };

    expect(json).not.toBeInstanceOf(MonthVisitModel);
    expect(json.month).toEqual(expected.month);
  })
})


