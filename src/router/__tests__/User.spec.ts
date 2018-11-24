import User from '../User'

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

(User.component as any) = Component;

describe('@/router/User', () => {
  let app
  let mockRoute
  beforeEach(() => {
    mockRoute = User,
    app = (global as any).createVueRouter([mockRoute])
  })
  it('exports a valid Vue Router', () => {
        const wrapper = (global as any).mount(App, app);
        app.router.push({ name: User.name});
        expect(wrapper.find(Component).exists()).toBe(true);
  })
})
