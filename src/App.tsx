import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Pages/Main";
import DetailPage from "./Pages/DetailPage";

const router = createBrowserRouter([
  { path: "/", element: <Main /> },
  { path: "/detail/:id", element: <DetailPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
