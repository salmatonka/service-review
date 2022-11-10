import {createBrowserRouter} from 'react-router-dom'
import Main from '../../layout/Main'
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Blog from '../../Pages/Home/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Details from '../../Pages/Home/Service/Details';
import Service from '../../Pages/Home/Service/Service';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';

const  router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/service',
                element:<Service></Service>,
                // loader:({params})=>{
                //     fetch(`http://localhost:5000/services/&{params.id}`)
                // }
            },
            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>{
                    fetch(`http://localhost:5000/services/${params.id}`)
                }
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            // {
            //     path:'/errorPage',
            //     element:<ErrorPage></ErrorPage>
            // },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            
        ]
    }
])

export default router;