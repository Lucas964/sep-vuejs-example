<template>
  <div class="blog">
    <div v-for="(post, index) in blogposts" v-bind:key="index">
      <blogpost :id="index" :title="post.title" :text="post.text" v-on:remove="remove" />
    </div>
  </div>
</template>

<script>
import blogpost from './components/Blogpost.vue';

export default {
  name: 'app',
  components: { blogpost },
  data: () => {
    return {
      blogposts: [
        {
          title: 'Intro to VueJS',
          text: 'Lorem ipsum'
        },
        {
          title: 'VueJS for Beginners',
          text: 'Lorem ipsum'
        }
      ]
    }
  },
  methods: {
    remove(id) {
      this.blogposts.splice(id, 1);
    }
  }
}
</script>

<style>

.blog {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>