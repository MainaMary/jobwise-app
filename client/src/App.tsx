import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Register,
  AddJob,
  Admin,
  DashboardLayout,
  Error,
  Landing,
  MainLayout,
  Profile,
  Statistics,
  Login,
} from "./pages";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error />,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/addJob",
          element: <AddJob />,
        },
        {
          path: "/addJob",
          element: <AddJob />,
        },
        {
          path: "/addJob",
          element: <AddJob />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
