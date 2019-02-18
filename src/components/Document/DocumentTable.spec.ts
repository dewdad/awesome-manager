import DocumentTable from './DocumentTable.vue'

describe('@/components/Document/DocumentTable', () => {
  it('exports a valid component', () => {
    expect(DocumentTable).toBeAComponent()
  })
  it('component should have methods', () => {
    const options = (global as any).createComponentMocks({})
    const { vm } = (global as any).shalloMountView(DocumentTable, options)
    expect(vm.editing).toBe(false)
  })
  it('component should call methods', async () => {
    const options = (global as any).createComponentMocks({})
    const { vm } = (global as any).shalloMountView(DocumentTable, options)
    const exportItem = jest.fn()
    await vm.exportItem({})
    expect(exportItem).toBeCalled()
  })
})
