import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Home from "./pages/Home"; // Composant Home pour la route "/"
import Login from "./pages/Login"; // Composant Login pour la route "/login"
import Profile from "./pages/Profile"; // Composant Profile pour la route "/profile"
import Error from "./pages/Error"; // Composant Error pour toutes les routes non trouvées
import {home, login, profile} from "./routes"; // Variables exportées depuis le fichier routes.js contenant les différents paths

/**
 * Router qui lit les routes venues de routes.js et les assigne un composant.
 * @type {Router}
 * @return {Router} an array of objects that contains the route and the component (path, element).
 */
const Router = createBrowserRouter([
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
       {/* Routeur de react-router-dom qui va s'occuper d'afficher les Pages */}
    <RouterProvider router={Router} />
   </>
  );
}

export default App;
