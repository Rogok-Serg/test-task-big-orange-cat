import React, { FC } from 'react'
import TodoItem from './TodoItem/TodoItem'
import { Task } from 'components/Interface'

interface ITodoListProps {
  taskList: Task[]
  onDelete: (id: number) => void
}

const TodoList: FC<ITodoListProps> = ({ taskList, onDelete }) => {
  return (
    <div>
      <li>
        {taskList.map((item) => (
          <TodoItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </li>
    </div>
  )
}

export default TodoList
