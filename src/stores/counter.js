import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  //data
  state: () => ({
    count: 0,
    favNumber: 18,
    favFilms: []
  }),

  //computed properties
  getters: {
    doubleCount: (state) => state.count * 2,
    multiplyByFour: (state) => state.count * 4
  },

  //methods
  actions: {
    increment() {
      ++this.count;
    },
    decrement() {
      --this.count;
    },
    changeFavNumber(){
        const newFav = Math.floor(Math.random()*(100 - 1))
        this.favNumber = newFav
    },
  },
});
