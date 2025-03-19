<template>

    <div v-if="content != {}" class="w-[90%]">
        <div class="bg-neutral-200 p-4 m-4 flex gap-10 justify-around">
            <div>
                <h2> 🐾 {{ content.name}}</h2>
                <p> Classification : {{content.classification}}</p>
                <p> Language : {{content.designation}}</p>
                <p> Average Lifespan : {{content.average_lifespan}}</p>
                <div class="bg-white p-2 w-fit">
                    Homeworld:
                    <RouterLink :to="findUrlId(content.homeworld)">
                        <PlanetCard :url="content.homeworld" v-if="content.homeworld" class="w-32 h-32" />
                    </RouterLink>
                </div>
            </div>
            <div>
                <p> Designation : {{content.designation}}</p>
                <p> Average Lifespan : {{content.average_lifespan}}</p>
                <p> Average Height: {{content.average_height}}</p>
                <p> Skin colors: {{content.skin_colors}}</p>
                <p> Eye colors: {{content.eye_colors}}</p>
            </div>
            <br>
        </div>
        <div v-if="content.people.length > 0">
            <h3>🤹‍♀️ Characters</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.people">
                <li v-for="person in content.people" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(person)" v-if="person">
                       <CharacterCard :url="person"/>
                    </RouterLink>
                </li>
            </ul>
            <br>
        </div>
        <div v-if="content.films.length>0">
            <h3>📽️ Films</h3>
            <hr class="m-2">
            <ul class="flex flex-wrap justify-center gap-4" v-if="content.films">
                <li v-for="film in content.films" class="border border-slate-500 w-64">
                    <RouterLink :to="findUrlId(film)">
                       <FilmCard :url="film"/>
                    </RouterLink>
                </li>
            </ul>
            <br>
        </div>
        
        <br>
        <div v-for="item, key in content" class="p-2 m-2 bg-neutral-200"> {{key}}:{{item}}</div>
    </div>
</template>
<script>
import CharacterCard from "../components/CharacterCard.vue"
import PlanetCard from "../components/PlanetCard.vue"
import FilmCard from "../components/FilmCard.vue"

export default {
    name: "CharacterDetail",
    components:{CharacterCard, FilmCard, PlanetCard},
    data() {
        return {
            content: {}
        }
    },
    async created() {
        try {
            const response = await fetch(`https://swapi.dev/api/species/${this.$route.params.id}`);
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