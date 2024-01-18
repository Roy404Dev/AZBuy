import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/rootLayout/RootLayout";
import "./sass/main.scss";
import { ContextProvider } from "./context/useContex";
import AdminPage from "./pages/AdminPage";
import GridContainer from "./layout/GridContainer/GridContainer";
import LoginPage from "./pages/LoginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import UserPage from "./pages/UserPage/UserPage";
import Orders from "./pages/Orders/Orders";
import CartPage from "./pages/Cart/CartPage";
import { QueryClient, QueryClientProvider } from "react-query";

// TODO ADD VIEW PRODUCT
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <GridContainer />,
      },
      {
        path: "categories/:category",
        element: <GridContainer />,
      },
      {
        path: "user/account",
        element: <UserPage />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },

  {
    path: "admin",
    element: <AdminPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
