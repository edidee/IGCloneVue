<template>
  
    <header >
      <div class="image-div">
        <div class="image">
          <img v-bind:src="post.profileImage" alt="">
        </div>
        <h5>{{post.profile_name}}</h5>
       
      </div>
      <img v-bind:src="post.postImage" alt="">
      <div class="display">
        <div>
          <Like v-bind:like="post.Like"/> <Comments /> <Share /> 
        </div>
        <div >
          <Save />
        </div>
        
      </div >

    </header>
    
    
  
</template>

<script>
import Like from './like.vue'
import Comments from './comments.vue'
import Share from './share.vue'
import Save from './save.vue'
export default {
  name: 'Post',
  props: [
    'post'
  ],
  components: {
     Like,
    Comments,
    Share,
    Save,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


header{
  width: 100%;
  margin: 0 auto;
}

.image-div{
  display: flex;
  margin-left: 2%;
  padding-top: 2%;
}

.image{
  width: 42px;
  height: 46px;
  border-radius: 50% ;
  border: 2px solid red;
}

img{
  max-width: 100%;
  max-height: 100%;
  display: block;
}
.image img{
  border-radius: 50% ;
}

.image-div h5{
  margin-left: 2%;
}

   .display{
        display: flex;
        justify-content: space-between;
        padding: 3px;
        margin: 5px;
}
</style>
