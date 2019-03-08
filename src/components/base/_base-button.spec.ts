import BaseButton from './_base-button.vue'
import { shallowMount } from '@vue/test-utils'

describe('@components/_base-button', () => {
  it('renders its content', () => {
    const slotContent = '<span>foo</span>'
    const { element } = shallowMount(BaseButton, {
      slots: {
        default: slotContent
      }
    })
    expect(element.innerHTML).toContain(slotContent)
  })
})
