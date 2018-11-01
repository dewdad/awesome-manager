<template>
  <div>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class TopToolbar extends Vue {
  navigate(to, payload) {
    this.$router.push({ path: to });
  }
}
</script>
