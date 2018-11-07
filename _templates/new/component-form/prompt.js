const _ = require('lodash')

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Component Name: (i.e. user-table)',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.'
      }
      const fileName = _.kebabCase(value)
      if (fileName.indexOf('-') === -1) {
        return 'Component names should contain at least two words to avoid conflicts with existing and future HTML elements.'
      }
      return true
    },
  },
  {
    type: 'input',
    name: 'model',
    message: 'Model Name: (i.e. User)',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.'
      }
      const modelName = _.kebabCase(value)
      if (modelName.indexOf('-') !== -1) {
        return 'Model names should contain only one words, avoid using - or _.'
      }
      return true
    },
  },
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [
      {
        name: '<script>',
        value: 'script',
        default: true,
      },
      {
        name: '<template>',
        value: 'template',
        default: true,
      },
      {
        name: '<style>',
        value: 'style',
        default: true,
      },
    ],
    validate(value) {
      if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
        return 'Components require at least a <script> or <template> tag.'
      }
      return true
    },
  },
]
