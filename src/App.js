/*
  NOTE:
    - import React, {Component} from 'react'; をやるか
    - const {tasks} = this.state をやるか
    - オブジェクトの配列をstateに持たせたときの操作が煩雑。ex) handleSubmit, handleCheck, handleRemove
    - constで定義したオブジェクトや配列の、中身の要素は変えられることが混乱しそう
    - bind
    - bind(this, params)
    - createReactAppすると余計なもの結構ある。 ex) `import './App.css';`
    - map, filter, find使ってみた
    - html&cssの知識必要
    - event.preventDefault
    - component分けたい
*/

import React from 'react';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {id: 1, title: 'progate', completed: true},
        {id: 2, title: 'codecademy', completed: false},
        {id: 3, title: 'udemy', completed: true},
        {id: 4, title: 'udacity', completed: false},
        {id: 5, title: 'pluralsight', completed: true},
      ],
      inputTitle: '',
    }
  }

  handleChange(event) {
    this.setState({inputTitle: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {tasks, inputTitle} = this.state;
    if (inputTitle === '') return
    tasks.push({id: tasks[tasks.length - 1].id + 1, title: inputTitle, completed: false})
    this.setState({
      tasks: tasks,
      inputTitle: '',
    })
  }

  handleCheck(id) {
    const {tasks} = this.state
    const task = tasks.find(task => task.id === id)
    task.completed = !task.completed
    this.setState({tasks: tasks})
  }

  handleRemove(id) {
    const tasks = this.state.tasks
    const removeTask = tasks.find(task => task.id === id)
    tasks.splice(tasks.indexOf(removeTask), 1)
    this.setState({tasks: tasks})
  }

  render() {
    const {
      tasks,
      inputTitle,
    } = this.state

    const completedTasks = tasks.filter(task => task.completed)
    const uncompletedTasks = tasks.filter(task => !task.completed)

    return (
      <div>
        <h1 className='todo-header'>Task List</h1>
  			<form
          className='todo-form'
          onSubmit={this.handleSubmit.bind(this)}
        >
  				<input
            className='todo-input'
            type='text'
  					placeholder='what is task?'
            value={inputTitle}
            onChange={this.handleChange.bind(this)}
          />
          <input
            className='todo-submit'
            type='submit'
            value='Add'
          />
  			</form>
        <div className='todo-list'>
          <h2 className='category-title'>Not Done</h2>
          <ul>
            {uncompletedTasks.map(task => {
              return (
                <li key={task.id} className='todo-task'>
            			<input
                    type='checkbox'
                    onChange={this.handleCheck.bind(this, task.id)}
                  />
            			<label>
                    {task.title}
                  </label>
            			<button onClick={this.handleRemove.bind(this, task.id)}>Remove</button>
            		</li>
              )
            })}
          </ul>
        </div>
        <div className='todo-list'>
          <h2 className='category-title'>Done</h2>
          <ul>
            {completedTasks.map(task => {
              return (
                <li key={task.id} className='todo-task'>
            			<input
                    type='checkbox'
                    checked='checked'
                    onChange={this.handleCheck.bind(this, task.id)}
                  />
            			<label>{task.title}</label>
            			<button onClick={this.handleRemove.bind(this, task.id)}>Remove</button>
            		</li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}
