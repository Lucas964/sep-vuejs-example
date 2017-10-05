<template>
  <div class="blog">
    <div v-for="(post, index) in blogposts" v-bind:key="index">
      <blogpost :id="index" :title="post.title" :text="post.text" v-on:remove="remove"></blogpost>
    </div>
    <div class="addPost">
      <input type="text" placeholder="Title" v-model="newPostTitle"></input>
      <input type="text" placeholder="Text" v-model="newPostText"></input>
      <button v-on:click="addPost({title: newPostTitle, text: newPostText})">Add Post</button>
    </div>
  </div>
</template>

<script>
import blogpost from './components/Blogpost.vue';
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'app',
  components: { blogpost },
  data: () => {
    return {
    newPostTitle: '',
    newPostText: ''
    }
  },
  computed: {
    ...mapGetters(['blogposts'])
  },
  methods: {
    ...mapActions(['addPost'])
  }
}
</script>

<style>
.blog {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.addPost {
  padding-top: 20px
}

input {
  width: 40%
}
</style>