<template>
  <v-layout justify-space-around>
    <v-icon
        @click="navigate('/home')"
        large
        color="white darken-1">business</v-icon>
    <v-icon
        @click="navigate('/login')"
        large
        color="white darken-2">chat</v-icon>
    <v-icon
        @click="navigate('/database')"
        large
        color="white darken-3">dialpad</v-icon>
    <v-icon
        @click="navigate('/document')"
        large
        color="white darken-4">email</v-icon>
    <v-icon
        @click="navigate('/user')"
        large
        color="white darken-5">call_split</v-icon>
    <v-icon
        @click="navigate('/help')"
        large
        color="white darken-6">present_to_all</v-icon>
  </v-layout>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State, Mutation, Action, Getter } from 'vuex-class'

@Component({
  components: {}
})
export default class App extends Vue {
  navigate(to: string, payload?: string) {
    this.$router.push({ path: to })
  }
}
</script>
