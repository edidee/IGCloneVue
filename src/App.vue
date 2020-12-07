<template>
  <div id="app">
    <PostCard />
    
  </div>
</template>

<script>

import PostCard from './components/PostCard.vue';

export default {
  name: 'App',
  components: {
   PostCard,
}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 70%;
  margin: 0 auto;
}


</style>
