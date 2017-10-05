<template>
  <div>
    <ul v-for="todo in todos" v-bind:key="todo">
      <li>{{todo}}</li>
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
        this.todo = "";
      }
      
    }
  }
}
</script>

<style>
</style>