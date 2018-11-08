module.exports = [
  {
    type: 'input',
    name: 'model',
    message: 'Model Name:(i.e. User)',
    validate(value) {
      if (!value.length) {
        return 'Vuex ORM models must have a name.'
      }
      return true
    },
  },
]
