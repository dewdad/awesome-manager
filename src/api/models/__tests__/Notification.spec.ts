import NotificationModel from '../Notification'

describe('@/api/models/Notification', () => {
  it('exports a valid Vuex ORM Model', () => {
    const model = new NotificationModel()

    expect(model.title).toBe('New message from Michael')
  })

  it('expect string field', () => {
    expect(new NotificationModel({}).title).toBe('New message from Michael')
    expect(new NotificationModel({ title: 'notification' }).title).toBe('notification')
  })

  it('expect to json', () => {
    const model = new NotificationModel()
    const json = model.$toJson()

    const expected = {
      _id: 1,
      title: 'New message from Michael'
    }

    expect(json).not.toBeInstanceOf(NotificationModel)
    expect(json.title).toEqual(expected.title)
  })
})
