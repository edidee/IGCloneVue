<template>
    
     <font-awesome-icon  v-bind:class="{liked: like}" :icon="['far','heart']" @click="doubleClick" />
    
    

</template>

<script>
export default {
    name: 'Like',
    props: [
         'like'
    ],
    mounted() {
        console.log(this.like);
    },
    methods: {
        doubleClick() {
            this.like = !this.like;
        }
    }
    
}
</script>



<style scoped>
    .liked{
        color: red;
    }
</style>
    
