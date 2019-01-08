<template>
  <v-card>

    <v-card-media
        :src="`${baseUrl}nature/n3.jpeg`"
        class="white--text">
    </v-card-media>
    <v-card-text>

      <v-divider></v-divider>
      <v-toolbar
          card
          color="white">
        <v-text-field
            flat
            solo
            label="Comment here"
            append-icon="photo_camera"
            hide-details=""
        ></v-text-field>
      </v-toolbar>
    </v-card-text>
  </v-card>
</template>

<script>
import baseUrlMixin from "@/mixins/baseUrlMixin";
export default {
  mixins: [baseUrlMixin],
};
</script>

<style>
</style>
