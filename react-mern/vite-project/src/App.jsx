import { createBrowserRouter, RouterProvider } from "react-router-dom";
import First from "./pages/First";
import Cart from "./pages/Cart";
import "./ecommerce.css";

const router = createBrowserRouter([
  { path: "/",
    element: (
      <>
      <Header/>
      <First/>
      <Footer/>
      </>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;