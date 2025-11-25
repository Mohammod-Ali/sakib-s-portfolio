import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import SocialLink from "./Pages/SocialLinks/SocialLink";

function App() {
  return (
    <>
    <SocialLink></SocialLink>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
