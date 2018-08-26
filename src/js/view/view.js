function View() {
  console.log('view created');
  this.input = document.querySelector('.input');
  this.todos = document.querySelector('.todos');
}

View.prototype = {
  renderAll: function(data) {
    var _this = this;
    for(var i = 0; i < data.todos.length; i++) {
      var li = document.createElement('li');
          li.classList.add('item');
          li.textContent = data.todos[i].title;
          li.dataset.id = data.todos[i].id;
      var button = document.createElement('button');
          button.textContent = '삭제';
          button.classList.add('remove');
      li.appendChild(button);

      _this.todos.appendChild(li);
    }
  },
  bind: function(action, handler) {
    var _this = this;
    switch(action) {
      case 'addTodo':
        _this.input.addEventListener('keydown', function(e) {
          if(e.keyCode === 13) {
            handler(e.target.value);
          }
        });
        break;
      case 'removeTodo':
        _this.todos.addEventListener('click', function(e) {
          var target;
          var targetId;
          if(e.target.classList.contains('remove')) {
            target = e.target.parentElement;
            targetId = Number(target.dataset.id)
            handler(targetId);
          }
        })
        break;
      default:
        break;
    }
  },
  addTodoItem: function(data) {
    var _this = this;
    var li = document.createElement('li');
        li.classList.add('item');
        li.textContent = data.title;
        li.dataset.id = data.id;
    var button = document.createElement('button');
        button.textContent = '삭제';
        button.classList.add('remove');
    li.appendChild(button);

    _this.todos.appendChild(li);
  },
  removeTodoItem: function(id) {
    var _this = this;
    var removeItem = _this.todos.querySelector(`[data-id="${id}"]`);
    _this.todos.removeChild(removeItem);
  },
  clearInput: function() {
    var _this = this;
    
    _this.input.value = '';
  }
}

export default View;
