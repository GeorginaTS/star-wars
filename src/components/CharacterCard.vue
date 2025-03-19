<template>
    <div class="h-full bg-slate-100 p-4" v-if="content != {}">
        {{ content.name }} (year: {{ content.birth_year }})
    </div>
</template>
<script>
export default {
    name:"CharacterCard",
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
    watch: {
        async url(value){
            try {
            const response = await fetch(`${this.url}`);
            this.content = await response.json()
            console.log('Success');
        } catch {
            console.error('Failed');
        }  
        }
    }
    
}
</script>
<style>
    
</style>