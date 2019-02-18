import { LowdbForElectron } from '../index'

const entities = ['user', 'document', 'account']
const pool = entities.reduce((entitiesDb, entity) => {
  const DB = new LowdbForElectron(entity)
  DB.dbCreate(entity)
  entitiesDb[entity] = DB
  return entitiesDb
}, {})

describe('testing lowdb class', () => {
  let testDB: LowdbForElectron
  beforeEach(() => {
    testDB = new LowdbForElectron('test')
    testDB.clear('activity')
    testDB.dbInit(['activity'])
  })

  it('should create node in file', () => {
    let activities = testDB.db
      .read()
      .get('activity')
      .value()
    expect(activities).not.toBeNull
  })

  it('should create data in file', () => {
    testDB.db
      .read()
      .get('activity')
      .push({ name: 'xingwenju' })
      .write()

    let activities = testDB.db
      .read()
      .get('activity')
      .value()

    expect(activities.length).toBeGreaterThan(0)
  })

  it('should call instance methods', () => {
    testDB.insert('activity', {
      name: 'xingwenju'
    })
    testDB.insert('activity', {
      name: 'wanglulu'
    })

    let activities = testDB.all('activity')
    expect(activities.length).toBe(2)

    let activity

    activity = testDB.find('activity', { name: 'xingwenju' })
    expect(activity).toEqual({ name: 'xingwenju' })

    testDB.update('activity', { name: 'xingwenju' }, { name: 'wanglulu' })
    activity = testDB.find('activity', { name: 'wanglulu' })
    expect(activity).toEqual({ name: 'wanglulu' })

    testDB.delete('activity', { name: 'wanglulu' })
    activity = testDB.find('activity', { name: 'wanglulu' })
    expect(activity).toBe(undefined)
  })
})

describe('testing lowdb pool', () => {
  let userDB: LowdbForElectron
  beforeEach(() => {
    userDB = pool['user']
    userDB.clear('user')
    userDB.dbInit(['user'])
  })
  it('should create pool with file', () => {
    expect(userDB).not.toBeNull()
    expect(userDB.db).not.toBeNull()
  })
  it('should set default value of entity', () => {
    const defaultValue = userDB.db.get('user').value()
    expect(defaultValue).toEqual([])
  })
  it('should set new value of entity', () => {
    userDB.insert('user', {
      name: 'xingwenju'
    })
    const newValue = userDB.find('user', {})
    expect(newValue).toEqual({ name: 'xingwenju' })
  })
})
