import Document from '../Document'

const Component = (global as any).mockComponent;
const App = (global as any).mockApp;

(Document.component as any) = Component;

describe('@/router/Document', () => {
  let app
  let mockRoute
  beforeEach(() => {
    mockRoute = Document,
    app = (global as any).createVueRouter([mockRoute])
  })
  it('exports a valid Vue Router', () => {
        const wrapper = (global as any).mount(App, app);
        app.router.push({ name: Document.name});
        expect(wrapper.find(Component).exists()).toBe(true);
  })
})
