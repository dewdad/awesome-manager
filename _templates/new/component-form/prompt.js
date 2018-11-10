module.exports = [
  {
    type: 'input',
    name: 'model',
    message: 'Model Name: (i.e. User)',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.'
      }
      if (value.indexOf('-') !== -1) {
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
