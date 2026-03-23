import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Mobile from "./components/Mobile/Mobile.jsx";
import Laptop from "./components/Laptop/Laptop.jsx";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Users from "./components/Users/Users.jsx";
import Users2 from "./components/Users2/Users2.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PosteDetails from "./components/PosteDetails/PosteDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/mobile", Component: Mobile },
      { path: "Laptop", Component: Laptop },
      {path:"contact",Component:Contact},
      {path:"about",Component:About},
      {
        path:"users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component:Users
      },
      {
        path:'users2',
        element:<Suspense fallback={<h1>hello pleace wait for loading data ....</h1>}>
          <Users2></Users2>
        </Suspense>
      },
      {
        path: 'user/:userId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UserDetails
      },
      {
        path:'posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        Component:Posts
      },
      {
        path:'posts/:posteId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.posteId}`),
        Component:PosteDetails
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
