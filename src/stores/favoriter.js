import { defineStore } from "pinia";

export const useFavoriterStore = defineStore("favoriter", {
  //data
  state: () => ({
    favFilms: []
  }),

  //methods
  actions: {
    add(value) {
      this.favFilms.push(value);
    },
    remove(value) {
      let idx = this.favFilms.indexOf(value)
      if(idx>=0) {
       this.favFilms.splice(idx,1)
      }
    },
    isFavorited(value) {
        return this.favFilms.includes(value)
    }
  },
});
