import React from "react";
import Loginpage from "./Loginpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browser from "./Browser";



const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/netflix-web/",
      element: <Loginpage />,
    },
    {
      path: "/netflix-web/browser",
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
