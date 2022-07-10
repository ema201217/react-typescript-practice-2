import React from 'react'
import { useTask } from '../hooks/useTask'
import { ITask } from '../types-interfaces'

export const TaskCardItem = ():any => { // Hay que reparar este tipado!
  const { tasks, toggleDoneTask, deleteTask } = useTask()

  return tasks.map((task: ITask, i: number) => (
        <div className="row" key={i}>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body mt-2 text-center">
                    <h2 className={task.done ? 'text-decoration-line-through' : ''}>{task.name}</h2>
                    <div className="row flex-nowrap gap-1 justify-content-center">
                        <button onClick={() => toggleDoneTask(i)} className="btn btn-outline-primary w-25">
                            {task.done ? '✔️' : '❌'}
                        </button>
                        <button className="btn btn-outline-danger w-25" onClick={() => deleteTask(i)}>
                            🗑
                        </button>
                    </div>
                </div>
            </div>
        </div>
  ))
}
