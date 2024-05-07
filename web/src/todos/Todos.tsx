import { useQuery } from "react-query"
import TodoItem from "./TodoItem"
import { Todo } from "../types"

const Todos = () => {
  const {
    data: todos = [],
    isLoading,
    isError
  } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch(import.meta.env.VITE_API)
      // const res = await fetch("http://api:5000")
      return await res.json()
    }
  })
  return isLoading ? (
    <div>Loading Todos...</div>
  ) : isError ? (
    <div>There was an error while fetching todos</div>
  ) : (
    <ul>
      {(todos || [])?.map((todo: Todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  )
}

export default Todos
