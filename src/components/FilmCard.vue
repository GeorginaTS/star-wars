<template>
    <div v-if="content" class="p-2">
        episode {{ content.episode_id }}: <h3>{{ content.title }}</h3> <br> {{ content.director }} {{ content.release_date }}
    </div>
</template>
<script>
export default {
    name:"FilmCard",
    props:["url"],
    data() {
        return {
            content:{}
        }
    },
    async created() {
        try {
            const response = await fetch(`${this.url}`);
            this.content = await response.json()
            console.log('Success');
        } catch {
            console.error('Failed');
        }
    },
    
}
</script>
<style>
    
</style>