<template>
  <v-card class="elevation-0">
    <v-toolbar
        card
        dense
        color="transparent">
      <v-toolbar-title><h4>Notification</h4></v-toolbar-title>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-list
          two-line
          class="pa-0">
        <template v-for="(item, index) in items">
          <v-subheader
              v-if="item.header"
              :key="index">{{ item.header }}</v-subheader>
          <v-divider
              v-else-if="item.divider"
              :key="index"></v-divider>
          <v-list-tile
              avatar
              v-else
              :key="index"
              @click="handleClick">
            <v-list-tile-avatar :color="item.color">
              <v-icon dark>{{item.icon}}</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action class="caption">
              {{item.timeLabel}}
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-btn
          block
          flat
          class="ma-0">All</v-btn>
      <v-divider></v-divider>
      <notification-form></notification-form>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
// import notes from "@/api/notification";
import Notification from '@/api/models/Notification'
import NotificationForm from '@/components/Notification/NotificationForm'
export default {
  components: {
    NotificationForm
  },
  computed: {
    items: () => Notification.all()
  },
  methods: {
    handleClick: e => {
      console.log(e)
    }
  }
}
</script>
