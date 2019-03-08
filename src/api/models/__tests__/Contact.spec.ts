import ContactModel from '../Contact'

describe('@/api/models/Contact', () => {
  it('exports a valid Vuex ORM Model', () => {
    const model = new ContactModel()

    expect(model.homePhone).toBe('001-212-1111111')
  })

  it('expect string field', () => {
    expect(new ContactModel({}).homePhone).toBe('001-212-1111111')
    expect(new ContactModel({ homePhone: '001-212-1111111' }).homePhone).toBe('001-212-1111111')
  })

  it('expect to json', () => {
    const model = new ContactModel()
    const json = model.$toJson()

    const expected = {
      _id: 1,
      homePhone: '001-212-1111111'
    }

    expect(json).not.toBeInstanceOf(ContactModel)
    expect(json.homePhone).toEqual(expected.homePhone)
  })
})
