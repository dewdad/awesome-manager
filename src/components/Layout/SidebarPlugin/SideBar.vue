<template>
  <div
      class="sidebar"
      :data-color="activeColor"
      :data-image="backgroundImage"
      :style="sidebarStyle">
    <div class="logo">
      <a
          href="#"
          class="simple-text logo-mini">
        <div class="logo-img">
          <img
              :src="imgLogo"
              alt="">
        </div>
      </a>

      <a
          href="https://international-policy-study.netlify.com"
          target="_blank"
          class="simple-text logo-normal">
        {{title}}
      </a>
    </div>
    <div class="sidebar-wrapper">
      <slot name="content"></slot>
      <v-list class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link
              v-for="(link,index) in sidebarLinks"
              :key="link.name + index"
              :to="link.path"
              :link="link">
          </sidebar-link>
        </slot>
      </v-list>
    </div>
  </div>
</template>
<script>
import SidebarLink from './SidebarLink.vue'
import MobileMenu from '@/components/Layout/MobileMenu.vue'
import baseUrlMixin from '@/mixins/baseUrlMixin'

export default {
  mixins: [baseUrlMixin],
  components: {
    SidebarLink,
    MobileMenu
  },
  props: {
    title: {
      type: String,
      default: '通用管理系统'
    },
    backgroundImage: {
      type: String,
      default: require('@/assets/logo.png')
    },
    imgLogo: {
      type: String,
      default: require('@/assets/logo.png')
    },
    activeColor: {
      type: String,
      default: 'green',
      validator: value => {
        let acceptedValues = ['', 'purple', 'blue', 'green', 'orange', 'red']
        return acceptedValues.indexOf(value) !== -1
      }
    },
    sidebarLinks: {
      type: Array,
      default: () => []
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  provide() {
    return {
      autoClose: this.autoClose
    }
  },
  computed: {
    sidebarStyle() {
      return {
        backgroundImage: `url(${this.backgroundImage})`
      }
    }
  }
}
</script>
<style>
@media screen and (min-width: 991px) {
  .nav-mobile-menu {
    display: none;
  }
}
</style>
