import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from './Components/Home/Home/Home';
import Root from './Layout/Root';
import Error from './Components/Error/Error';
import "animate.css";
import Login from './Components/Login/Login';
import About from './Components/Home/About/About';
import Services from './Components/Home/Services/Services';
import AuthProviders from './Providers/AuthProviders';
import SignUp from './Components/SignUp/SignUp';
import Contact from './Components/Home/Contact/Contact';
import Order from './Components/Order/Order';
import Swal from "sweetalert2";
import AddNewService from './Components/AddNewService/AddNewService';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/loggedin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/order/:id",
        element: <Order></Order>,
        loader: ({params}) => 
           fetch(`http://localhost:5000/services/${params.id}`)
        
         
      },
      {
        path: "/addnewservice",
        element: <AddNewService></AddNewService>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
     
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);