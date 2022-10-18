import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

const Shop = () => (
  <div>
    <h1>SHOP HERE</h1>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
