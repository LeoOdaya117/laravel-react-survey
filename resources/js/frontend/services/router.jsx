import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/Index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    // Note: This is a template for using Layout
    // {
    //     path: "/",
    //     element: <GuestLayout />,
    //     children: [
    //         {
    //             path: "/signin",
    //             element: <Signin />,
    //         },
    //         {
    //             path: "/signup",
    //             element: <Signup />,
    //         },
    //     ],
    // },
]);

export default router;
