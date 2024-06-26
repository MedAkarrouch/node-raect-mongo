import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { QueryClient, QueryClientProvider } from "react-query"

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
)
