import { useMutation, useQueryClient } from "react-query"
import { Todo } from "../types"

const TodoItem = ({ todo }: { todo: Todo }) => {
  const queryClient = useQueryClient()
  const { isLoading, mutate: deleteTodo } = useMutation({
    mutationFn: (todoId: string) =>
      fetch(`${import.meta.env.VITE_API}/${todoId}`, {
        // fetch(`http://api:5000/${todoId}`, {
        method: "DELETE"
      }),
    onSuccess: () => queryClient.invalidateQueries()
  })
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <p style={{ fontSize: "1.25rem" }}>{todo.text}</p>
      <button disabled={isLoading} onClick={() => deleteTodo(todo._id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
