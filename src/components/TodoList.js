import React from 'react';
import TodoItem from './TodoItem.js'

export default class TodoList extends React.Component {
  render() {
    const {
      isCompleted,
      tasks,
      checkHandler,
      clickRemoveHandler,
    } = this.props

    return (
      <div>
        <h2 className='category-title'>{isCompleted ? 'Done' : 'Not Done'}</h2>
        <ul>
          {tasks.map(task => {
            return (
              <TodoItem
                key={task.id}
                isCompleted={isCompleted}
                task={task}
                checkHandler={checkHandler.bind(this)}
                clickRemoveHandler={clickRemoveHandler.bind(this)}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}
