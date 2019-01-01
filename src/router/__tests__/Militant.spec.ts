import Militant from '../Militant'

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

(Militant.component as any) = Component;

describe('@/router/Militant', () => {
  let app
  let mockRoute
  beforeEach(() => {
    mockRoute = Militant,
    app = (global as any).createVueRouter([mockRoute])
  })
  it('exports a valid Vue Router', () => {
        const wrapper = (global as any).mount(App, app);
        app.router.push({ name: Militant.name});
        expect(wrapper.find(Component).exists()).toBe(true);
  })
})
