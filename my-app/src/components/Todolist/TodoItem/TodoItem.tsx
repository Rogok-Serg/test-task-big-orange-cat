import { Task } from 'components/Interface'
import React, { FC } from 'react'

interface ITodoItemProps {
  item: Task
  onDelete: (id: number) => void
  isCompleted: () => void
  completed: boolean
}

const TodoItem: FC<ITodoItemProps> = ({
  item,
  onDelete,
  isCompleted,
  completed
}) => {
  const { id, task } = item

  return (
    <li>
      <div>
        <label style={{ marginRight: 10, marginLeft: 10 }}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => isCompleted}
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
