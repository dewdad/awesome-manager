import {
  stringArrayFromClassKeys,
  objectArrayFromClassKeys,
  classFromStringArray,
  selectedDeepClone,
  selectedDeepMining,
  stateObjectFromArray
} from './transformer'

class Model {
  name: 'name'
  type: 'type'
  address: {}
  constructor(name, type) {
    this.name = name
    this.type = type
    this.address = {}
  }
}
describe('Helpers functions about class', () => {
  it('should pick string keys only', () => {
    const result = stringArrayFromClassKeys(new Model('model', 'type'))
    expect(result[0]).toBe('name')
    expect(result[1]).toBe('type')
    expect(result[2]).toBe(undefined)
  })
  it('should pick object keys only', () => {
    const result = objectArrayFromClassKeys(new Model('model', 'type'))
    expect(result[0]).toBe('address')
    expect(result[1]).toBe(undefined)
  })
})

describe('create class from string enumerations', () => {
  it('should work', () => {
    /** Create a K:V */
    const Direction = classFromStringArray(['name', 'type', 'address'])
    expect(Direction.name).toBe('name')
    /** Create a Type */
    type TDirection = keyof typeof Direction

    /**
     * Sample using a string enum
     */
    let sample: TDirection
    sample = Direction.type // Okay
    expect(sample).toBe('type')
  })
})

describe('create object from selected type of given object', () => {
  it('should work', () => {
    /** Create a K:V */
    const model = {
      name: 'xingwenju',
      address: {
        home: 'here',
        house: {
          no: '1'
        }
      }
    }
    const o = selectedDeepClone(model, 'object')
    const x = selectedDeepClone(o, 'object')
    const y = selectedDeepClone(x, 'object')
    const z = selectedDeepClone(y, 'object')
    expect(x).toEqual(y)
    expect(x).toEqual(z)
    expect(y).toEqual(z)

    const m = selectedDeepMining(model, 'object')
    expect(m.length).toBe(2)
  })
})

describe('create object from given array with _id', () => {
  it('should have _id', () => {
    /** Create a K:V */
    const model = {
      _id: '1',
      name: 'entity'
    }
    const array = [model]
    const m = stateObjectFromArray(array)
    expect(m['1']).toEqual(model)
  })
})
