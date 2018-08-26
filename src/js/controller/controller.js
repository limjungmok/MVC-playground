function Controller(model, view) {
  console.log('controller created');
  this.model = model;
  this.view = view;
  
  var controller = this;
  this.initialReder();

  // first init
  this.view.bind('addTodo', function(title) {
    controller.addTodo(title);
  });
  this.view.bind('removeTodo', function(id) {
    controller.removeTodo(id);
  });
}

Controller.prototype = {
  initialReder: function() {
    var _this = this;
    _this.view.renderAll(_this.model.read());
  },
  addTodo: function(title) {
    var _this = this;
    _this.model.create(title, function(data) {
      _this.view.addTodoItem(data);
      _this.view.clearInput();
    });
  },
  removeTodo: function(id) {
    var _this = this;
    _this.model.delete(id, function() {
      _this.view.removeTodoItem(id);
    });
  }
}

export default Controller;
