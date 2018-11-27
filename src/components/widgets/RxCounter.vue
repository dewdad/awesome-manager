<template>
  <v-container>
    <div id="app">
      <div>{{ count }}</div>

      <!-- simple usage -->
      <button v-stream:click="plus$">Add on Click</button>

      <button v-stream:click="{ subject: plus$, data: minusDelta1, options:{once:true} }">Add on Click (Option once:true)</button>

      <!-- you can also stream to the same subject with different events/data -->
      <button
          v-stream:click="{ subject: minus$, data: minusDelta1 }"
          v-stream:mousemove="{ subject: minus$, data: minusDelta2 }">
        Minus on Click &amp; Mousemove
      </button>

      <pre>{{ $data }}</pre>

    </div>
  </v-container>
</template>

<script>
import { merge } from "rxjs";
import { filter, bufferWhen, pluck, debounceTime, map, startWith, scan } from "rxjs/operators";
export default {
  name: "rx-counter",
  data() {
    return {
      minusDelta1: -1,
      minusDelta2: -1,
    };
  },
  created() {
    //Speed up mousemove minus delta after 5s
    setTimeout(() => {
      this.minusDelta2 = -5;
    }, 5000);
  },
  // declare dom stream Subjects
  domStreams: ["plus$", "minus$"],
  subscriptions() {
    return {
      count: merge(this.plus$.pipe(map(() => 1)), this.minus$.pipe(pluck("data"))).pipe(
        startWith(0),
        scan((total, change) => total + change),
      ),
    };
  },
};
</script>

<style>
button {
  padding: 10px;
  font-size: 14px;
  margin-right: 10px;
  border-radius: 4px;
  outline: none;
}
</style>
