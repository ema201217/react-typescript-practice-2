import React from 'react'
import { useTask } from '../hooks/useTask'
import { ITask } from '../types-interfaces'

interface PropsCardItem {
    task: ITask
    i: number
}

export const TaskCardItem = ({ task, i }: PropsCardItem): React.ReactElement => { // Hay que reparar este tipado!
  const { toggleDoneTask, deleteTask } = useTask()

  return (
        <div className="row">
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
  )
}
