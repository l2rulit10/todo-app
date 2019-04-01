import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import TodoInput from './components/todoInput'
import TodoItem from './components/todoItem'

const MOCK = ['Make dinner tonight!', 'Fold the laundry.', 'Learn to make a React app!']

class App extends Component {
  state = {
    todos: MOCK.map((m, index) => ({ text: m, id: index + 1 }))
  }

  addTodo = (todoText) => {
    const { todos } = this.state
    this.setState({
      todos: todos.concat({ text: todoText, id: todos.length + 1 })
    })
  }

  removeTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='todo-wrapper'>
          <Header />
          <TodoInput addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map(todo => (
                <TodoItem text={todo.text}
                  key={todo.id}
                  removeTodo={() => this.removeTodo(todo.id)}
                />
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default App
