import AddressModel from '../Address'

describe('@/api/models/Address', () => {
  it('exports a valid Vuex ORM Model', () => {
    const model = new AddressModel()

    expect(model.name).toBe('name')
  })

  it('expect string field', () => {
    expect(new AddressModel({}).name).toBe('name')
    expect(new AddressModel({ name: 'name' }).name).toBe('name')
  })

  it('expect to json', () => {
    const model = new AddressModel()
    const json = model.$toJson()

    const expected = {
      _id: 1,
      name: 'name'
    }

    expect(json).not.toBeInstanceOf(AddressModel)
    expect(json.name).toEqual(expected.name)
  })
})
