import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { paths, site } from "./config/site";
import { SiteLayout } from "./layout/SiteLayout";
import {
  AccommodationsPage,
  HomePage,
  NotFoundPage,
  PlaceholderPage,
  SuitePage,
} from "./pages/Pages";
import "./styles/site.css";

const router = createBrowserRouter([
  {
    path: paths.home,
    Component: SiteLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: paths.residence,
        element: <PlaceholderPage title="The Residence" />,
      },
      { path: paths.accommodations, Component: AccommodationsPage },
      { path: `${paths.accommodations}/:slug`, Component: SuitePage },
      {
        path: paths.booking,
        element: (
          <PlaceholderPage
            title="Booking"
            description="Online booking is planned for a future phase."
          />
        ),
      },
      { path: paths.contact, element: <PlaceholderPage title="Contact" /> },
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
]);

document.documentElement.lang = site.locale;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
