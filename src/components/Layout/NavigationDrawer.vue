<template>

  <v-navigation-drawer
      app
      dark
      class="rebeccapurple lighten-1"
      mini-variant:sync="true"
      temporary
      width="200"
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="showDrawer"
    >

    <v-toolbar
        flat
        class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="/mfa-avatar.svg">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Xing Wenju</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense>
      <template v-for="item in MenuItemsProd">
        <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
          <v-flex
              xs6
              md1 >
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex
              xs6
              md1
              class="text-xs-center">
            <a
                href="#!"
                class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="navigate(child.to, child.route)"
            >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile
            v-else
            @click="navigate(item.to)"
            :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

import { sync, call } from "vuex-pathify";

const isDevelopment = process.env.NODE_ENV !== "production";

@Component({
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showDrawer: function() {
      return this.drawer;
    },
    MenuItemsProd: sync("uiSetting@MenuItemsProd"),
    MenuItemsDev: sync("uiSetting@MenuItemsDev"),
  },
})
export default class NavigationDrawer extends Vue {
  // Navigation routes
  navigate(to, payload) {
    this.$router.push({ path: to });
  }
}
</script>
