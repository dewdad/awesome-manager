import TrendingModel from '../Trending'

describe('@/api/models/Trending', () => {
  it('exports a valid Vuex ORM Model', () => {
    const model = new TrendingModel()

    expect(model.subheading).toBe('Sales')
  })

  it('expect string field', () => {
    expect(new TrendingModel({}).subheading).toBe('Sales')
    expect(new TrendingModel({ subheading: 'Sales' }).subheading).toBe('Sales')
    expect(new TrendingModel({ subheading: 1 }).subheading).toBe('1')
    expect(new TrendingModel({ subheading: true }).subheading).toBe('true')
    expect(new TrendingModel({ subheading: null }).subheading).toBe('null')
  })

  it('expect to json', () => {
    const model = new TrendingModel()
    const json = model.$toJson()

    const expected = {
      _id: 1,
      subheading: 'Sales'
    }

    expect(json).not.toBeInstanceOf(TrendingModel)
    expect(json.subheading).toEqual(expected.subheading)
  })
})
