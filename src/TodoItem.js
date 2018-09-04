import React from 'react'

export default class TodoItem extends React.Component {
  render() {
    const {
      task,
      isCompleted,
      checkHandler,
      clickRemoveHandler,
    } = this.props

    const {
      id,
      title,
    } = task

    return (
      <li className='todo-task'>
        <input
          type='checkbox'
          checked={isCompleted && 'checked'}
          onChange={checkHandler.bind(this, id)}
        />
        <label>{title}</label>
        <button onClick={clickRemoveHandler.bind(this, id)}>Remove</button>
      </li>
    )
  }
}
