import React from 'react'
import './App.css'
import { FormAddTask } from './components/FormAddTask'
import { TaskCardItem } from './components/TaskCardItem'

export const App = (): React.ReactElement => {
  return (
    <div className="container p-4">
      <FormAddTask/>
      <TaskCardItem />
    </div>
  )
}
