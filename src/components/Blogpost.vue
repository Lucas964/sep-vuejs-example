<template>
    <div class="post">
        <h1>{{title}}</h1>
        <p>{{text}}</p>
        <button v-on:click="remove">Remove</button>
    </div>
</template>

<script>
export default {
    name: 'blogpost',
    props: ['id', 'title', 'text'],
    methods: {
        remove() {
            this.$emit('remove', this.id);
        }
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