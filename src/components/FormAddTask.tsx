import React, { useRef, useState } from 'react'
import { useTask } from '../hooks/useTask'

type EventElement = React.FormEvent<HTMLFormElement>

export const FormAddTask = (): React.ReactElement => {
  const inputSave = useRef<HTMLInputElement>(null)
  const [newTask, setNewTask] = useState<string>('')
  const { addTask } = useTask()

  const handleSubmit = (e: EventElement) => {
    e.preventDefault()
    if (newTask !== '') {
      addTask(newTask)
      setNewTask('')
      inputSave.current?.focus()
    }
  }

  return (
    <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input ref={inputSave} className="form-control" type="text" autoFocus onChange={e => setNewTask(e.target.value)} value={newTask} />
            <button className="btn btn-success btn-block mt-3">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
