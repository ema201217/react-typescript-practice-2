import React from 'react'
import './App.css'
import { FormAddTask } from './components/FormAddTask'
import { TaskCardItem } from './components/TaskCardItem'
import { ITask } from './types-interfaces'
import { useTask } from './hooks/useTask'

export const App = (): React.ReactElement => {
  const { tasks } = useTask()

  return (
    <div className="container p-4">
      <h1>Hola</h1>
     <FormAddTask />
     {
        tasks?.map((task: ITask, i: number) => (
          <TaskCardItem key={i} task={task} i={i}/>
        ))
      }
    </div>
  )
}
