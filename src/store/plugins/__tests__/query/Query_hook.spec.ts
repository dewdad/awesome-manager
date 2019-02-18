import Activity from '@/api/models/Activity'
import { Query } from '@vuex-orm/core'

const createStore = (global as any).createORMStore
describe('Unit – Query', () => {
  it('retrieves the module as null if not defined', () => {
    createStore([{ model: Activity }])

    const module = new Query({ $name: 'activity' }, 'activity').getModule()

    expect(module).toEqual({})
  })

  it('can register hooks to query', () => {
    createStore([{ model: Activity }])
    const activity = new Activity({
      applicant: 'xingwenju',
      content: 'test'
    })
    Activity.insert({ data: activity })
    Query.on('afterCreate', model => {
      console.log(model)
      expect(model).toBe(Activity)

      const applicant = model.applicant
      expect(applicant).toBe('xingwenju')

      const modelModel = model.$self()
      expect(modelModel).toBe(Activity)

      const query = model.$query()
      expect(query.get()).toBe('xingwenju')

      const entity = model.$self().entity
      expect(entity).toBe('activity')
    })
  })
})
