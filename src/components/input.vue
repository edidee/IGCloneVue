<template>
<div>
    <p class="likes">{{post.numberOfLikes}}likes</p>
    <div class="caption">
        <div class="profile-name">
            <h5>{{post.profile_name}}</h5>
        </div>
        <div class="caption-p">
            <p>{{post.caption}}</p>
        </div>
    </div>
    <input type="text" placeholder="Add a comment...">
</div>
</template>


<script>

export default {
    name: 'Post',
  props: [
    'post'
  ]
}
</script>


<style scoped>

    .likes{
        margin-left: 2%;
    }
    .caption{
        display: flex;
        height: 40px;
        margin-top: 6px;
        margin-left: 2%;
        /* padding: 4px; */
    }

    h5{
        margin: 0;
    }
    .caption-p{
        /* margin-top: 12px; */
        margin-left: 3px;
    }

    /* .profile-name{
        padding-top: -1px;
    } */

    input{
        width: 100%;
        padding: 4px;
        border: 0;
    }

    p{
        font-size: 0.7rem;
        padding: 0;
        margin-block-end: 0;
        margin-block-start: 0;
    }
</style>