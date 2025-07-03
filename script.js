// script.js: Clean JavaScript with proper structure
class TodoApp {
    constructor() {
        this.todoItems = [];
        this.todoList = document.getElementById('todo-items');
        this.addTodoForm = document.getElementById('add-todo-form');
        this.todoInput = document.getElementById('todo-input');

        this.addTodoForm.addEventListener('submit', this.addTodoItem.bind(this));
    }

    addTodoItem(event) {
        event.preventDefault();
        const todoItem = this.todoInput.value.trim();
        if (todoItem) {
            this.todoItems.push(todoItem);
            this.renderTodoList();
            this.todoInput.value = '';
        } else {
            alert('Please enter a todo item');
        }
    }

    renderTodoList() {
        this.todoList.innerHTML = '';
        this.todoItems.forEach((todoItem, index) => {
            const todoListItem = document.createElement('li');
            todoListItem.innerHTML = `
                <span>${todoItem}</span>
                <button class="remove-todo" data-index="${index}">Remove</button>
            `;
            this.todoList.appendChild(todoListItem);

            const removeTodoButton = todoListItem.querySelector('.remove-todo');
            removeTodoButton.addEventListener('click', this.removeTodoItem.bind(this, index));
        });
    }

    removeTodoItem(index) {
        this.todoItems.splice(index, 1);
        this.renderTodoList();
    }
}

const todoApp = new TodoApp();