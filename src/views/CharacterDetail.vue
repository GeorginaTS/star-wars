<template>

    <div v-if="content != {}" class="w-[90%]">
        <div class="bg-neutral-200 p-4 m-4 flex gap-10 justify-around">
            <div>
                <h2> 🤹‍♀️ {{ content.name }}</h2>
                <p>
                    Gender: {{ content.gender }} <br>
                    Birth Year: {{ content.birth_year }} <br>
                <div class="bg-white p-2 w-fit">
                    Homeworld:
                    <RouterLink :to="findUrlId(content.homeworld)">
                        <PlanetCard :url="content.homeworld" v-if="content.homeworld" />
                    </RouterLink>
                </div>
                </p>
            </div>
            <div>
                <p>
                    Height :{{ content.height }} <br>
                    Mass: {{ content.mass }} <br>
                    Hair color: {{ content.hair_color }} <br>
                    Skin color: {{ content.skin_color }} <br>
                    Eyes color: {{ content.eye_color }} <br>
                </p>
            </div>
        </div>
        <br>
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
            <br>
        </div>

        <div v-if="content.species.length > 0">
            <h3>🐾 Species</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.species">
                <li v-for="specie in content.species" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(specie)" v-if="specie">
                        <SpecieCard :url="specie" />
                    </RouterLink>
                </li>
            </ul>
            <br>
        </div>

        <div v-if="content.vehicles.length>0">
            <h3>🏍️ Vehicles</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.vehicles">
                <li v-for="vehicle in content.vehicles" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(vehicle)" v-if="vehicle">
                        <VehicleCard :url="vehicle" />
                    </RouterLink>
                </li>
            </ul>
        </div>
        <div v-if="content.starships.length > 0">
            <h3>🛸 Starships</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.starships">
                <li v-for="starship in content.starships" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(starship)" v-if="starship">
                        <StarshipCard :url="starship" />
                    </RouterLink>
                </li>
            </ul>
        </div>
        <br>
    </div>
</template>
<script>
import PlanetCard from "../components/PlanetCard.vue"
import FilmCard from "../components/FilmCard.vue"
import VehicleCard from "../components/VehicleCard.vue"
import StarshipCard from "../components/StarshipCard.vue"
import SpecieCard from "../components/SpecieCard.vue"

export default {
    name: "CharacterDetail",
    components: { PlanetCard, FilmCard, VehicleCard, StarshipCard, SpecieCard },
    data() {
        return {
            content: {}
        }
    },
    async created() {
        try {
            const response = await fetch(`https://swapi.dev/api/people/${this.$route.params.id}`);
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