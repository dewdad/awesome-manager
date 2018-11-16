import AccountModel from '../Account';
describe('@state/modules/Acccount %>', () => {
  it('exports a valid Vuex module', () => {
    expect(AccountModel).toBeAVuexModule()
  })
})