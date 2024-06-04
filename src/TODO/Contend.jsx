import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./ContactPage";
import Profile from "./ProfilePage";
import Error  from "./ErrorPage";

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

// 

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> ,errorElement:<Error/> },
  { path: "/contact", element: <Contact /> },
  { path: "/profile", element: <Profile /> },
  { path: "/profile/:id", element: <Profile/> }
]);

const Content = () => {
  return <RouterProvider router={router} />;
};

export default Content;
