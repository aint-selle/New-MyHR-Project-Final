import {Navigate, createBrowserRouter} from "react-router-dom";
import Login from "./views/Login.jsx";
import Users from "./views/users.jsx";
import NotFound from "./views/NotFound.jsx";
import Defaultlayout from "./components/Defaultlayout.jsx";
import Guestlayout from "./components/Guestlayout.jsx";
import children  from "react";
import Dashboard from "./views/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Defaultlayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to = "/Login"/>
            },
            {
                path: '/Dashboard',
                element: <Dashboard/>
            },
            {
                path: '/Users',
                element: <Users/>
            },
        ]
    },
    {
        path: '/',
        element: <Guestlayout/>,
        children: [
            {
                path: '/Login',
                element: <Login/>
            },
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
    
])



export default router;