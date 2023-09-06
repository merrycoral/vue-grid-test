// 예제 파일 경로:
// ./src/stores/counter.js

import {
  defineStore
} from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  }
})