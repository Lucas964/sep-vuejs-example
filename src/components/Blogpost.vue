<template>
    <div class="post">
        <h1>{{title}}</h1>
        <p>{{text}}</p>
        <button v-on:click="removePost(id)">Remove</button>
    </div>
</template>

<script>
import {
    mapActions
} from 'vuex'

export default {
    name: 'blogpost',
    props: ['id', 'title', 'text'],
    methods: {
        ...mapActions(['removePost'])
    }
}
</script>

<style>
h1,
p {
    font-family: sans-serif
}

.post {
    padding: 20px;
    border: 1px solid;
}

button {
    border: 0;
}
</style>