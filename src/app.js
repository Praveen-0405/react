import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import RestoMenus from "./components/RestoMenus";
import UserContext from "./utils/UserContext";
import { useState } from "react";
const Layout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName("Praveen Kumar");
  }, []);

  return (
    <UserContext.Provider value={{ userData: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        {/* <Body /> */}
      </div>
    </UserContext.Provider>
  );
};

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/restaurants/:restId",
        element: <RestoMenus />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
