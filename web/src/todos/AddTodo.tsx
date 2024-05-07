import { FormEvent, useRef } from "react"
import { useMutation, useQueryClient } from "react-query"

const AddTodo = () => {
  const queryClient = useQueryClient()
  const formRef = useRef<HTMLFormElement>(null)
  const { isLoading, mutate: addTodo } = useMutation({
    mutationFn: (text: string) =>
      fetch(import.meta.env.VITE_API, {
        // fetch("http://api:5000", {
        method: "POST",
        body: JSON.stringify({ text }),
        headers: {
          "content-type": "application/json"
        }
      }),
    onSuccess: () => {
      queryClient.invalidateQueries()
      formRef.current?.reset()
    }
  })
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget as HTMLFormElement)
    const text = data.get("text") as string
    if (!text) return
    addTodo(text)
  }
  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input required name="text" type="text" />
      <input type="submit" value={`${isLoading ? "Adding" : "Submit"}`} />
    </form>
  )
}

export default AddTodo
