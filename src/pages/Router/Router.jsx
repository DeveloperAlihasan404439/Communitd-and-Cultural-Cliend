import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import SingleEducation from "../SingleEducation/SingleEducation";
import Login from "../AuthProvider/Login/Login";
import Contact from "../Contact/Contact";
import ContactUsers from "../ContactUsers/ContactUsers";
import AddCourses from "../AddCourses/AddCourses";
import UserCoures from "../UserCoures/UserCoures";
import Provider from "../AuthProvider/Provider/Provider";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/education/:id',
                element: <Provider><SingleEducation/></Provider>,
                loader: ({params})=>fetch(`http://localhost:5000/events/${params.id}`)

            },
            {
                path: '/addCoruser/:id',
                element: <AddCourses/>,
                loader: ({params})=>fetch(`http://localhost:5000/events/${params.id}`)

            },
            {
                path: '/coures',
                element: <Provider><UserCoures/></Provider>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/contact-users',
                element: <ContactUsers/>,
                loader: ()=>fetch('http://localhost:5000/users')
            },
            {
                path: '/login',
                element: <Login/>
            },
        ]
    }
])