import EntityModel from '../Entity'

describe('@/api/models/Entity', () => {
  it('exports a valid Vuex ORM Model', () => {
    const model = new EntityModel()

    expect(model.name).toBe('CEVE')
  })

  it('expect string field', () => {
    expect(new EntityModel({}).name).toBe('CEVE')
    expect(new EntityModel({ name: 'mfa' }).name).toBe('mfa')
    expect(new EntityModel({ name: 1 }).name).toBe('1')
    expect(new EntityModel({ name: true }).name).toBe('true')
    expect(new EntityModel({ name: null }).name).toBe('null')
  })

  it('expect to json', () => {
    const model = new EntityModel()
    const json = model.$toJson()

    const expected = {
      _id: null,
      name: 'CEVE'
    }

    expect(json).not.toBeInstanceOf(EntityModel)
    expect(json.name).toEqual(expected.name)
  })
})
