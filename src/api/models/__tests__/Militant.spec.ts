import MilitantModel from '../Militant'

describe('@/api/models/Militant', () => {
  it('exports a valid Vuex ORM Model', () => {
    const model = new MilitantModel()

    expect(model.name).toBe('Li')
  })

  it('expect string field', () => {
    expect(new MilitantModel({}).name).toBe('Li')
    expect(new MilitantModel({ name: 'Li' }).name).toBe('Li')
  })

  it('expect to json', () => {
    const model = new MilitantModel()
    const json = model.$toJson()

    const expected = {
      _id: 1,
      name: 'Li'
    }

    expect(json).not.toBeInstanceOf(MilitantModel)
    expect(json.name).toEqual(expected.name)
  })
})
