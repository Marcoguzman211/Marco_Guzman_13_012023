/*import { BrowserRouter as Router, Routes, Route} from "react-router-dom";*/
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import {home, login, profile} from "./routes";


const router = createBrowserRouter([
    {
        path: home,
        element: <Home />,
    },
    {
        path: login,
        element: <Login />,
    },
    {
        path: profile,
        element: <Profile />,
    },
    {
        path: "/*",
        element: <Error />,
    }
]);

function App() {
  return (
   <>
    <RouterProvider router={router} />
   </>
  );
}

export default App;
