import Resummee from '../Resummee'

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

(Resummee.component as any) = Component;

describe('@/router/Resummee', () => {
  let app
  let mockRoute
  beforeEach(() => {
    mockRoute = Resummee,
    app = (global as any).createVueRouter([mockRoute])
  })
  it('exports a valid Vue Router', () => {
        const wrapper = (global as any).mount(App, app);
        app.router.push({ name: Resummee.name});
        expect(wrapper.find(Component).exists()).toBe(true);
  })
})
