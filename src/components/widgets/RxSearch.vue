<template>
  <div>
    <a href="https://codeburst.io/combining-vue-typescript-and-rxjs-with-vue-rx-a084d60b6eac">Using Rxjs in Vue</a>
    <label for="search">Search for something:</label>
    <input
        type="text"
        id="search"
        class="input-field">
    <ul
        v-for="(item, index) in news"
        :key="index"
      >
      <li :key="item.objectID">
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios, { AxiosResponse } from 'axios'
import { Component, Vue } from 'vue-property-decorator'
import { from, Observable, SchedulerLike } from 'rxjs'
import { debounceTime, map, pluck, switchMap } from 'rxjs/operators'

interface HackerNewsResult {
  objectID: string
  title?: string
  url?: string
}

interface HackerNewsSearchResponse {
  hits: Array<HackerNewsResult>
}

interface HandleObservableOptions {
  time?: number
  scheduler?: SchedulerLike
}

const hackerNewsEndpoint: string = 'http://hn.algolia.com/api/v1/search?query='

export const handleObservable = function(
  observable: Observable<Event>,
  options: HandleObservableOptions = {}
): Observable<Array<HackerNewsResult>> {
  const { time = 300, scheduler } = options
  return observable.pipe(
    debounceTime(time, scheduler),
    pluck<Event, string>('target', 'value'),
    switchMap(value => from(axios.get<HackerNewsSearchResponse>(`${hackerNewsEndpoint}${value}`))),
    pluck<AxiosResponse, Array<HackerNewsResult>>('data', 'hits'),
    map((results: Array<HackerNewsResult>) =>
      results.filter((news: HackerNewsResult) => Boolean(news.title && news.url))
    )
  )
}

@Component<Search>({
  name: 'rx-search',
  subscriptions(this: Vue) {
    return {
      news: handleObservable(this.$fromDOMEvent('input', 'keyup'))
    }
  }
})
export default class Search extends Vue {
  news: Array<HackerNewsResult> = []
}
</script>

<style scoped>
.input-field {
  width: 50%;
}
</style>
