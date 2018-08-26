function Model(name) {
  console.log('model created');
  this.dbName = name;

  var model = this;
  if(!localStorage[model.dbName]) {
    var data = {
      idx: 0,
      todos: []
    }
    localStorage[model.dbName] = JSON.stringify(data);
  }
}

Model.prototype = {
  create: function(title, callback) {
    var _this = this;
    var DB = JSON.parse(localStorage[_this.dbName]);
    var todos = DB.todos;
    var todo = {
      'id': DB.idx++,
      'title': title
    };
    todos.push(todo);
    localStorage[_this.dbName] = JSON.stringify(DB);
    callback.call(_this, todo);
  },
  read: function() {
    var _this = this;
    return JSON.parse(localStorage[_this.dbName]);
  },
  update: function() {

  },
  delete: function(id, callback) {
    var _this = this;
    var DB = JSON.parse(localStorage[this.dbName]);
    DB.todos = DB.todos.filter(function(obj) { return obj.id !== id });
    localStorage[_this.dbName] = JSON.stringify(DB);
    callback(_this, id);
  }
}

export default Model;
