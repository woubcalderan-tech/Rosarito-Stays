import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { paths } from "./config/site";
import { SiteLayout } from "./layout/SiteLayout";
import {
  AccommodationsPage,
  BookingPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  PlaceholderPage,
  SuitePage,
} from "./pages/Pages";
import { ResidencePage } from "./pages/ResidencePage";
import "./styles/site.css";

const router = createBrowserRouter(
  [
    {
      path: paths.home,
      Component: SiteLayout,
      children: [
        { index: true, Component: HomePage },
        { path: paths.residence, Component: ResidencePage },
        { path: paths.accommodations, Component: AccommodationsPage },
        { path: `${paths.accommodations}/:slug`, Component: SuitePage },
        { path: paths.booking, Component: BookingPage },
        { path: paths.contact, Component: ContactPage },
        {
          path: paths.privacy,
          element: <PlaceholderPage title="Privacy Policy" />,
        },
        {
          path: paths.terms,
          element: <PlaceholderPage title="Terms and Conditions" />,
        },
        { path: "*", Component: NotFoundPage },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
