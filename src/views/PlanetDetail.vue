<template>
    <div v-if="content != {}" class="w-[90%]">
        <div class="bg-neutral-200 p-4 m-4 flex justify-around">
            <div>
                <h2>🌑 {{ content.name }}</h2>
                <p>Climate: {{ content.climate }}</p>
                <p>Population: {{ content.population }}</p>
            </div>
            <div>
                <p>Rotation period : {{ content.rotation_period }} </p>
                <p>Orbital period : {{ content.orbital_period }} </p>
                <p>Diameter : {{ content.diameter }} </p>
                <p>Gracity : {{ content.gravity }} </p>
                <p>Terrain : {{ content.terrain }} </p>
                <p>Surface : {{ content.gravity }} </p>
            </div>
        </div>
        <div v-if="content.residents.length>0">
            <h3>🤹‍♀️ Residents</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.residents">
                <li v-for="resident in content.residents" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(resident)">
                        <CharacterCard :url="resident" />
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div v-if="content.films.length>0">
            <h3>📽️ Films</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.films">
                <li v-for="film in content.films" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(film)">
                       <FilmCard :url="film" />
                    </RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import CharacterCard from "../components/CharacterCard.vue"
import FilmCard from "../components/FilmCard.vue"
export default {
    name: "PlanetDetail",
    components: { CharacterCard, FilmCard },
    data() {
        return {
            content: {}
        }
    },
    async created() {
        try {
            const response = await fetch(`https://swapi.dev/api/planets/${this.$route.params.id}`);
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