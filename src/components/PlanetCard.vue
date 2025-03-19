<template>

    <div class="h-full bg-amber-300 p-4 rounded-[50%] flex flex-col justify-center items-center" v-if="content != {}">
       <div>{{ content.name }}</div> <div>( {{ content.climate}} )</div>   
    </div>
</template>
<script>
export default {
    name:"PlanetCard",
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