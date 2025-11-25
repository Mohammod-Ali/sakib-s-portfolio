import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Resume from "../Pages/Resume/Resume";
import Contact from "../Pages/Contact/Contact";
import MyWork from "../Pages/MyWork/MyWork";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/resume',
          element: <Resume></Resume>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/myWork',
          element: <MyWork></MyWork>
        },
    ]
      
  },
]);
