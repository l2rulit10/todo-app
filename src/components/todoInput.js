import React from 'react'
import './todoInput.css'

export default class TodoInput extends React.Component {
  state = { value: '' }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  submit = () => {
    this.props.addTodo(this.state.value)
    this.setState({ value: '' })
  }
  render () {
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button className='btn btn-primary' onClick={this.submit}>Submit</button>
      </div>
    )
  }
}
