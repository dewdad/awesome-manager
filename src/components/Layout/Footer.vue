<template>
  <v-footer
      dark
      height="auto"
    >
    <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center"
      >
      <v-card-text>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Diplomatic Institution General Management System
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator'
export default class Footer extends Vue {
  icons: string[] = [
    'fab fa-facebook',
    'fab fa-twitter',
    'fab fa-google-plus',
    'fab fa-linkedin',
    'fab fa-instagram'
  ]
}
</script>
