import Evaluation from '../Evaluation'

const Component = (global as any).mockComponent
const App = (global as any).mockApp
;(Evaluation.component as any) = Component

describe('@/router/users/evaluation', () => {
  let app
  let mockRoute
  beforeEach(() => {
    ;(mockRoute = Evaluation), (app = (global as any).createVueRouter([mockRoute]))
  })
  it('exports a valid Vue Router', () => {
    const wrapper = (global as any).mount(App, app)
    app.router.push({ name: Evaluation.name })
    expect(wrapper.find(Component).exists()).toBe(true)
  })
})
