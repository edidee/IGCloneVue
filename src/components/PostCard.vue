<template>
    <div class="post-profile">
      <div v-for="data_post in data_posts " v-bind:key="data_post.caption">
      <Post :post='data_post' />
      <Input :post='data_post'/>
      </div>
      
      
      </div>
</template>

<script>
import Post from './Post.vue'

import Input from './input.vue'
import data_posts from '../data/data.js'
export default {
    components: {
    Post,
   
    Input
    },
    data() {
      return {
        data_posts
      }
    },
    mounted() {
      console.log(this.data_post);
    }
}
</script>
  

<style scoped>
    .post-profile{
        width: 38%;
        height: auto;
        margin: 0 auto;
        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
}

 
</style>