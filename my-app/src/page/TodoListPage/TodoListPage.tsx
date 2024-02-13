import { Task } from 'components/Interface'
import AddTodoForm from 'components/AddTodoForm/AddTodoForm'
import TodoList from 'components/Todolist/TodoList'
import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllTasks, paginationTodo } from 'redux/operations';
// import { selectTodo } from 'redux/selectors';
// import {
//   StyledContainer,
//   StyledTitle,
//   StyledButtonCreate,
//   StyledBlockButton,
// } from './TodoListPage.styled';

const TodoListPage = () => {
  const [taskList, setTaskList] = useState<Task[]>([])

  const addTodo = (task: string) => {
    const newTodo = { id: Date.now(), task }
    setTaskList([...taskList, newTodo])
  }

  const deleteTodo = (id: number) => {
    setTaskList(taskList.filter((el) => el.id !== id))
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList taskList={taskList} onDelete={deleteTodo} />
    </div>
  )
}

export default TodoListPage
