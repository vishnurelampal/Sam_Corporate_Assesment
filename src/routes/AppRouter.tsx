import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import BaseScreen from "../BaseScreen";
import LoginMain from "../components/login/LoginMain";
import Dashboard from "../components/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    element: <BaseScreen />,
    children: [
      {
        path: "/",
        element: <LoginMain />,
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
