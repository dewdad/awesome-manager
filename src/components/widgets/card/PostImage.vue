<template>
  <v-card>

    <v-card-media
        src="/static/nature/n3.jpeg"
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
export default {};
</script>

<style>
</style>
