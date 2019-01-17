import { VNode } from "vue";
import { component } from "vue-tsx-support";

import {
  VAlert,
  VApp,
  VAvatar,
  VBadge,
  VBtn,
  VBtnToggle,
  VContainer,
  VContent,
  VFlex,
  VIcon,
  VLayout,
} from "vuetify-tsx";

const Title = component({
  render() {
    return <h1 class="display-1 font-weight-bold mb-4">{this.$slots.default}</h1>;
  },
});

const SubTitle = component({
  render() {
    return <h2 class="title font-weight-bold my-5">{this.$slots.default}</h2>;
  },
});

const App = component({
  name: "App",
  data: () => ({
    breadcrumbs: [
      {
        text: "Dashboard",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
  render(): VNode {
    return (
      <VApp>
        <VContent>
          <VContainer>
            <VLayout justify-center>
              <Title>Vuetify TSX Components</Title>
            </VLayout>
            <VLayout>
              <VFlex>
                <SubTitle>Alert</SubTitle>
                <VAlert color="success" value={true}>
                  Awesome!
                </VAlert>
                <VAlert value={true}>Oh !@#$!</VAlert>

                <SubTitle>Avatar</SubTitle>
                <VAvatar size={50}>
                  <img src="https://via.placeholder.com/50" alt="Avatar Image" />
                </VAvatar>
                <VAvatar size={50} tile>
                  <img src="https://via.placeholder.com/50" alt="Avatar Image" />
                </VAvatar>

                <SubTitle>Badge</SubTitle>
                <VBadge left>
                  <span slot="badge">6</span>
                  <VIcon large>shopping_cart</VIcon>
                </VBadge>
                <VBadge color="accent" overlap>
                  <span slot="badge">99</span>
                  <VIcon large>mail</VIcon>
                </VBadge>

                <SubTitle>Breadcrumbs</SubTitle>

                <SubTitle>Button</SubTitle>
                <VBtn color="primary">Click Me!</VBtn>
                <VBtn depressed>Click Me!</VBtn>
                <VBtn outline>Click Me!</VBtn>
                <VBtn flat>Click Me!</VBtn>

                <SubTitle>Button Tobble</SubTitle>
                <VBtnToggle>
                  <VBtn>
                    <VIcon>format_align_left</VIcon>
                  </VBtn>
                  <VBtn>
                    <VIcon>format_align_center</VIcon>
                  </VBtn>
                  <VBtn>
                    <VIcon>format_align_right</VIcon>
                  </VBtn>
                </VBtnToggle>

                <SubTitle>Card</SubTitle>
              </VFlex>
            </VLayout>
          </VContainer>
        </VContent>
      </VApp>
    );
  },
});

export default App;
