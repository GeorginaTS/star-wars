<template>
    <div class="p-2" v-if="content != {}">
        <h3>{{ content.name }}</h3>
        ( {{ content.classification}} )
    </div>
</template>
<script>
export default {
    name:"SpecieCard",
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