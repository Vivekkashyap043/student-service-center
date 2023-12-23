import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './login-sign/Login'
import Home from './login-sign/Home'
import AdminLogin from './login-sign/AdminLogin'
import StudentLogin from './login-sign/StudentLogin'
import Register from './login-sign/Register'
import Root from './root/Root'
import AdminRegister from './login-sign/AdminRegister'
import StudentRegister from './login-sign/StudentRegister'
import AdminDashboard from './dashboard/admindashboard/AdminDashboard';
import StudentDashboard from './dashboard/studentdashboard/StudentDashboard'
import StudentDashboardHome from './dashboard/studentdashboard/StudentDashboardHome'
import IdCard from './dashboard/studentdashboard/IdCard'
import Bonafide from './dashboard/studentdashboard/Bonafide'
import AdminDashboardHome from './dashboard/admindashboard/AdminDashboardHome'

function Router() {

    

    let router = createBrowserRouter([
        {
            path: "",
            element:<Root />,
            children:[
                {
                    path:"",
                    element:<Home />
                },
                {
                    path:"login",
                    element:<Login/>,
                    children:[
                        {
                            path:"",
                            element:<StudentLogin />
                        },
                        {
                            path:"admin-login",
                            element:<AdminLogin />
                        }
                    ]
                },
                {
                    path:"register",
                    element:<Register/>,
                    children:[
                        {
                            path:"",
                            element:<StudentRegister/>
                        },
                        {
                            path:"admin-register",
                            element:<AdminRegister />
                        }
                    ]
                },
                {
                    path:"admin-dashboard",
                    element:<AdminDashboard/>,
                    children:[
                        {
                            path: "",
                            element: <AdminDashboardHome/>
                        }
                    ]
                },
                {
                    path:"student-dashboard",
                    element:<StudentDashboard/>,
                    children:[
                        {
                            path:"",
                            element:<StudentDashboardHome />
                        },
                        {
                            path:"id-card",
                            element:<IdCard />
                        },
                        {
                            path:"bonafide",
                            element:<Bonafide/>
                        }
                    ]
                }
            ]
        }
    ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default Router
