import ReactDOM from "react-dom/client";
import "./index.css";
import theme from "./theme.js";
import { ThemeProvider, CssBaseline } from "@mui/material";

import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import Signup from "./pages/Signup.jsx";
// import Login from "./pages/Login.jsx";
// import Profile from "./pages/Profile.jsx";
// import Chat from "./pages/Chat.jsx";
// import Events from "./pages/Events.jsx";
// import Event from "./pages/Event.jsx";
// import Ticket from "./pages/Ticket.jsx";
// import Auth from "./utils/auth.js";
// import DatingPlus from "./components/dating+/DatingPlus.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
      // {
      //   path: "/login",
      //   element: Auth.loggedIn() ? <Home /> : <Login />,
      // },
      // {
      //   path: "/dashboard",
      //   element: <Profile />,
      // },
      // {
      //   path: "/dashboard/messages",
      //   element: <Chat />,
      // },

      // {
      //   path: "/dashboard/events",
      //   element: <Events />,
      // },
      // {
      //   path: "/dashboard/events/:eventId",
      //   element: <Event />,
      // },
      // {
      //   path: "/dashboard/events/:eventId/purchase",
      //   element: <Ticket />,
      // },
      // {
      //   path: "/dashboard/dating+",
      //   element: <DatingPlus />,
      // },
      // {
      //   path: "/dashboard/settings",
      // },
      // {
      //   path: "dashboard/matches",
      // },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <RouterProvider router={router} />
  </ThemeProvider>
);
