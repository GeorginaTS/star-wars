<template>
    <div v-if="content != {}" class="w-[90%]">
        <div class="bg-neutral-200 p-4 m-4 flex gap-4">
            <div class="w-48">
                <img :src="`${content.title}.jpg`" :alt="content.title" class="w-full h-full cover" />
            </div>
            <div>
                <h2>{{ content.title }}</h2>
                <h3>Director: {{ content.director }}</h3>
                <h3>Producer: {{ content.producer }}</h3>
                <h4>Release date: {{ content.release_date }}</h4>
                <hr class="m-2">
                <button @click="favoriter.remove(content.url)" v-if="favoriter.isFavorited(content.url)">❤️</button>
                <button @click="favoriter.add(content.url)" v-else> add to favorite </button>
            </div>

        </div>
        <div class="w-full flex justify-center m-4">
            <p class="w-96 p-4 border border-slate-500">{{ content.opening_crawl }}</p>
        </div>
        <br>
        <div>
            <h3>🤹‍♀️ Characters</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.characters">
                <li v-for="character in content.characters" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(character)">
                        <CharacterCard :url="character" />
                    </RouterLink>
                </li>
            </ul>
        </div>
        <br>
        <div>
            <h3>🌑 Planets</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.planets">
                <li v-for="planet in content.planets" class="w-32 h-32">
                    <RouterLink :to="findUrlId(planet)">
                        <PlanetCard :url="planet" />
                    </RouterLink>
                </li>

            </ul>
            <br>
        </div>
        <div>
            <h3>🛸 Starship</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4">
                <li v-for="starship in content.starships" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(starship)">
                        <StarshipCard :url="starship" />
                    </RouterLink>
                </li>
            </ul>
            <br>
        </div>
        <div>
            <h3>🏍️ Vehicles</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4">
                <li v-for="vehicle in content.vehicles" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(vehicle)">
                        <VehicleCard :url="vehicle" />
                    </RouterLink>
                </li>
            </ul>
            <br>
        </div>
        <div>
            <h3>🐾 Species</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4">
                <li v-for="specie in content.species" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(specie)">
                        <SpecieCard :url="specie" />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import CharacterCard from "../components/CharacterCard.vue"
import PlanetCard from "../components/PlanetCard.vue"
import FilmCard from "../components/FilmCard.vue"
import VehicleCard from "../components/VehicleCard.vue"
import StarshipCard from "../components/StarshipCard.vue"
import SpecieCard from "../components/SpecieCard.vue"

import { useFavoriterStore } from '../stores/favoriter.js';

export default {
    name: "FilmDetail",
    components: { CharacterCard, PlanetCard, FilmCard, VehicleCard, StarshipCard, SpecieCard },
    setup() {
        const favoriter = useFavoriterStore()
        return { favoriter }
    },
    data() {
        return {
            content: {}
        }
    },
    async created() {
        try {
            const response = await fetch(`https://swapi.dev/api/films/${this.$route.params.id}`);
            this.content = await response.json()
            console.log('Success');
        } catch {
            console.error('Failed');
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