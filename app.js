let todoList = {

  todos: [],

  // displayTodos: function() {
  //
  //     for(let i = 0; i < this.todos.length; i++){
  //       for(let prop in todoList.todos[i]){
  //         console.log(todoList.todos[i].prop);
  //       }
  //     }
  //
  // },

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Great, no todos left!");

    } else {

      for (let i = 0; i < this.todos.length; i++) {

        if (this.todos[i].completed === true) {
          console.log("(x) " + this.todos[i].todoText);
        } else {
          console.log("() " + this.todos[i].todoText);
        }
      }
    }
  },

  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });

    // this.displayTodos();
  },

  changeTodo: function(index, newTodoText) {
    this.todos[index].todoText = newTodoText;
    this.displayTodos();
  },

  toggleCompleted: function(index) {
    //this.todos[index].completed = (this.todos[index].completed === false) ? true : false;
    this.todos[index].completed = !this.todos[index].completed;
  },

  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  },
};
