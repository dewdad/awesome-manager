---
to: "src/router/layouts/<%= h.inflection.singularize(name).toUpperCase() %>.vue"
---
<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
}
</style>
