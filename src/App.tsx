import { RouterProvider } from "react-router"
import { routes } from "./Router/routes"

export function App() {
  return <RouterProvider router={routes} />
}

export default App
