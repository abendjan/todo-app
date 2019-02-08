let todoList = {

  todos: ["item1", "item2", "item3"],

  displayTodos: function() {
    console.log(this.todos);
  },

  addTodo: function(item) {
    this.todos.push(item);
  },

  changeTodo: function(index, value){
    this.todos[index] = value;
  },

  deleteTodo: function(index){
    this.todos.splice(index, 1);
  }
};
