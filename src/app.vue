<template>
  <div>
    <div class="episode" v-for="episode in episodes" v-bind:key="episode.id">
      <h3>{{episode.name}}</h3>
      <div>
        <img v-if="episode.image" :src="episode.image.medium"></img>
        <p class="summary" v-html="episode.summary"></p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    fetch('http://api.tvmaze.com/shows/169/episodes')
    .then(response => {
      return response.json();
    })
    .then(json => {
        this.episodes = json;
    })
    .catch(err => {
      console.log("Failed to fetch data", err);
    });
  },
  data: () => {
    return {
      episodes: []
    }
  }
}
</script>

<style>
.episode {
  padding: 20px;
  clear: both;
}

img {
  float: left;
  padding-right: 10px;
}
</style>