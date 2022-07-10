import { useState } from 'react'
import { ITask } from '../types-interfaces'

export const useTask = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const addTask = (name: string) : void => {
    setTasks([...tasks, { name, done: false }])
  }

  const toggleDoneTask = (index:number): void => {
    const tasksUpdates: ITask[] = [...tasks]
    tasksUpdates[index].done = !tasksUpdates[index].done
    setTasks(tasksUpdates)
  }

  const deleteTask = (index: number) : void => {
    const tasksUpdates: ITask[] = tasks.filter((_, i) => i !== index)
    setTasks(tasksUpdates)
  }

  return {
    addTask,
    toggleDoneTask,
    deleteTask,
    tasks
  }
}
