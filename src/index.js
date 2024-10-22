import React from 'react';

import { createBrowserRouter, RouterProvider , Route, createRoutesFromElements } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import About from './Pages/About'
import App from './App';
import Github from './Pages/Github'
// import Github, { fetchData } from './Pages/Github'


// method1
// const router=createBrowserRouter([
//   {
// path:'/',
// element:<Home/>
// },
// {
//   path:'/contact',
//   element:<Contact/>
// },
// {
//   path:'/blog',
//   element:<Blog/>
// },
// {
//   path:'/about',
//   element:<About/>
// }
// ])

// method2
// const router=createBrowserRouter([
//   {
// path:'/',
// element:<App/>,
// children:[
//   {
//     path:'',
//      element:<Home/>
// },
// {
//     path:'contact',
//     element:<Contact/>
//   },
//   {
//     path:'blog',
//     element:<Blog/>
//   },
//   {
//     path:'about',
//     element:<About/>
//   }

// ]
// }
// ])

// method3
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='about' element={<About/>}/>
      {/* method1(diplay username through useparams) */}
      {/* <Route path='github/:username' element={<Github/>}/> */}
      {/* <Route path='github/:username' element={<Github/>} loader={ fetchData}/> */}
    <Route path='github/:username' element={<Github/>} loader={async()=>{try {
      const data1=await fetch('https://api.github.com/users/amarasaeed')
      const data2=await data1.json()
      return data2
    } catch (error) {
      console.error('error occur')
      return { error: 'Failed to load GitHub user data' };
    }}}/>

    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
 
  </React.StrictMode>
);


