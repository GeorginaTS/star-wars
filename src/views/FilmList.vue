<template>
    <div v-if="loaded" class="w-full ">
        <div class="flex flex-wrap justify-center">
            <div v-for="item in content.results" :key="item.url" class="w-96 border border-slate-500 p-4 m-4 flex flex-col gap-4">
                <RouterLink :to="findUrlId(item.url)">
                        <FilmCard :url="item.url" />  
                </RouterLink>
                <div>          
                <button @click="favoriter.remove(item.url)" v-if="favoriter.isFavorited(item.url)">❤️</button>
                <button @click="favoriter.add(item.url)" v-else> add to favorite </button> 
            </div>
            </div>
        </div>
        <div>----- {{favoriter.favFilms}}  ---</div>
    </div>
    
    <div v-else class="p-10 text-3xl text-red-700 font-bold">Loading Film List View</div>
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
    async mounted() {
        try {
            const response = await fetch(`https://swapi.dev/api/films`);
            this.content = await response.json()  
            console.log('Success');
        } catch {
            console.error('Failed');
        } finally {
            this.loaded = true;
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
<style></style>