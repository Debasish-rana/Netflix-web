import React from "react";
import Loginpage from "./Loginpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";



const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage />,
    },
    {
      path: "/Browser",
      element: <Browser />,
    },
  ]);

  

  

  return (
    <div className="Body">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
