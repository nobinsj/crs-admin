import Login from "@/pages/Login"
import { createBrowserRouter } from "react-router"

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
])
