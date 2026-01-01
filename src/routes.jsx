import App from "./components/App/App.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Home from "./components/Home/Home.jsx";
import Store from "./components/Store/Store.jsx";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: "true", element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
