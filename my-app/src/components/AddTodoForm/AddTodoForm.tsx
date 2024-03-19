import React, { useState, FC, FormEvent, ChangeEvent } from 'react'

interface IModalProps {
  onAdd: (task: string) => void
}

const AddTodoForm: FC<IModalProps> = ({ onAdd }) => {
  const [task, setTask] = useState<string>('')
  // const [completed, setCompleted] = useState<boolean>(false)
  // console.log('completed: ', completed)

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault()
    onAdd(task)
    setTask('')
  }

  return (
    <div>
      <div>
        <h2>Please enter the task</h2>
        <form onSubmit={handelSubmit}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <label
                htmlFor="taskTask"
                style={{ marginRight: 10, marginLeft: 10 }}
              >
                <span>Task</span>
              </label>
              <input
                id="taskTask"
                type="text"
                placeholder="Please enter the task"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTask(e.target.value)
                }
                required
                value={task}
              />
            </div>
          </div>
          <button type="submit">Create task</button>
        </form>
      </div>
    </div>
  )
}

export default AddTodoForm
