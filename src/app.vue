<template>
  <div class="container">
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{todo}}</li>
    </ul>
    <input type="text" v-model="newTodo" placeholder="Todo"></input>
    <button v-on:click="addTodo">Add Todo</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => {
    return {
      todos: [],
      newTodo: ""
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo){
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
      
    }
  }
}
</script>

<style>
.container {
  padding: 10px;
}
</style>