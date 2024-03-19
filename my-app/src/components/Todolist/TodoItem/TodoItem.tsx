import { Task } from 'components/Interface'
import React, { FC, useState } from 'react'

interface ITodoItemProps {
  item: Task
  onDelete: (id: number) => void
}

const TodoItem: FC<ITodoItemProps> = ({
  item,
  onDelete
}) => {
  const [completed, setCompleted] = useState<boolean>(false)

  const { id, task } = item

  return (
    <li>
      <div>
        <label style={{ marginRight: 10, marginLeft: 10 }}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() =>  setCompleted(completed === false ? true : false)}
          />
        </label>
        <p style={{ marginRight: 10 }}>{task}</p>
      </div>
      <div>
        <button
          style={{ marginLeft: 10, borderRadius: 50, width: 30 }}
          type="button"
          onClick={() => onDelete(id)}
        >
          &times;
        </button>
      </div>
    </li>
  )
}

export default TodoItem
