<template>
  <div class="container">
    <h1>Todo List</h1>
    <div v-if="!isEditing">
      <input type="text" v-model="todo" />
      <input type="submit" value="Submit" @click="SubmitTodo" />
    </div>
    <div v-else>
      <input type="text" v-model="todo" />
      <input type="submit" value="Update" @click="updateTodo" />
    </div>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button class="edit" @click="edit(todo, index)">Edit</button>
        <button class="delete" @click="deletes(todo, index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
      selected: null,
      isEditing: false,
      todos: [],
    };
  },
  methods: {
    SubmitTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
    edit(todo, index) {
      this.todo = todo;
      this.selected = index;
      this.isEditing = true;
    },
    updateTodo() {
      this.todos.splice(this.selected, 1, this.todo);
      this.isEditing = false;
    },
    deletes(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style>
.container {
  display: flex;
  padding: 10px;
  padding-right: 10px;
  flex-direction: column;
  width: 500px;
}
input[type="text"] {
  width: 100%;
  height: 40px;
  margin-bottom: 3px;
  cursor: pointer;
  border-radius: 3px;
}
input[type="submit"] {
  background: rgb(142, 117, 165);
  font-size: 20px;
  color: #fff;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;

}
ul {
  list-style-type: none;
  padding: 10px;
  font-size: 20px;
  text-transform: uppercase;
}
.edit {
  font-size: 20px;
  padding: 8px;
  margin: 3px;
  background: rgb(7, 204, 7);
  border-radius: 5px;
  cursor: pointer;

}
.delete {
  font-size: 20px;
  padding: 8px;
  margin: 3px;
  background: rgb(245, 6, 6);
  border-radius: 5px;
  cursor: pointer;

}
</style>
