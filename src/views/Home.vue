<template>
    <div class="w-full ">
        <div class="flex justify-center items-center ">
            <h1 class="absolute text-white drop-shadow-2xl shadow-white">A long time ago in a galaxy far, far away,</h1>
        <img src="https://images.unsplash.com/photo-1520034475321-cbe63696469a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-56 w-full">
        </div>
        <h1>Favorite Films</h1>
        <div v-if="!favoriter.favFilms.length"> No favorite movies yet</div>
        <div class="flex flex-wrap justify-center" v-else>
            <div v-for="item in favoriter.favFilms" :key="item" class="w-96 border border-slate-500 p-4 m-4 flex flex-wrap gap-4">
                <RouterLink :to="findUrlId(item)">
                        <FilmCard :url="item" />
                </RouterLink>
            </div>
        </div>
    </div>

</template>

<script>
import FilmCard from "../components/FilmCard.vue"
import { useFavoriterStore } from '../stores/favoriter.js';

export default {
    name: "Home",
    components: { FilmCard },
    setup(){
        const favoriter = useFavoriterStore()
        return { favoriter }
     },
    data() {
        return {
            content: {},
            loaded: false
        }
    },
    methods: {
        findUrlId(url) {
            if (url != null && url != "") {
                const arr = url.split("/")
                return `/${arr[arr.length - 3]}/${arr[arr.length - 2]}`
            } else {
                return "/"
            }
        }
    },
}
</script>
<style scoped>
h1 {
   text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em white;
}
</style>