<template>
    <div v-if="loaded" class="w-full ">
        <h1 class="p-4">Character List</h1>
        <div class="flex flex-wrap justify-center">
            <div v-for="item in content.results" :key="item.url" class="w-96 border border-slate-500 p-4 m-4 flex flex-wrap gap-4">
                <RouterLink :to="findUrlId(item.url)">
                        <CharacterCard :url="item.url" />
                </RouterLink>
            </div>
        </div>
        <div class="flex justify-around"> <button @click="previousPage" v-if="page>1">Previous</button><p> {{page}} / {{Math.ceil(content.count/10)}}</p><button @click="nextPage" v-if="page < content.count/10">Next</button> </div>
        <br>
    </div>
    <div v-else class="p-10 text-3xl text-red-700 font-bold">Loading Character List View</div>
</template>

<script>
import CharacterCard from "../components/CharacterCard.vue"

export default {
    name: "Home",
    components: { CharacterCard },
    data() {
        return {
            content: {},
            loaded: false,
            page:1
        }
    },
    async mounted() {
        try {
            const response = await fetch(`https://swapi.dev/api/people`);
            this.content = await response.json()
            this.loaded = true;
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
        },
        nextPage(){
            if(this.page < this.content.count/10) {
                this.page ++
            }
            
        },
        previousPage(){
            if (this.page > 1) {
                this.page --
            } 
        }
    },
    watch: {
        async page(value) {
            try {
            const response = await fetch(`https://swapi.dev/api/people/?page=${value}`);
            this.content = await response.json()
            this.loaded = true;
            console.log('Success');
        } catch {
            console.error('Failed');
        }

        }
    }
}
</script>
<style></style>