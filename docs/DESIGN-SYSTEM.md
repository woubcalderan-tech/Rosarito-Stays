# Design system

Reviewed all ten reference PNGs in `design-references/`. The supplied set contains one composite per page and viewport. Within each composite, read sections from top to bottom. If numbered files are added, follow their numbering.

| Reference pair   | Observed direction                                                                                                                                                                                                   |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Homepage         | Booking-led opening, featured suite, then end-of-page discovery and booking content. The mobile hero and featured suite use 85svh minimum heights, with a content-sized closing banner.                              |
| The Residence    | Image-led editorial layout, alternating desktop splits, mobile image-first stacks, then gallery and terracotta booking band.                                                                                         |
| Property Details | Editorial hero, line-icon facts, amenities, location and stay information. Mobile ends with an olive booking panel.                                                                                                  |
| Accommodations   | Desktop photo-led introduction and two-column cards. Mobile leads with text and stacks cards with full-width outlined actions.                                                                                       |
| Suite Details    | Desktop splits the lead image and suite information. Mobile leads with title, then gallery, amenities and availability. The shared template supports the initial split and stack when approved photos are available. |

The foundation uses sampled-by-eye approximations in `src/styles/site.css`. Cream and sand dominate, ink anchors editorial text, olive identifies primary actions and terracotta marks the homepage booking band. Buttons are solid olive or outlined with modest corners. Thin warm borders and soft shadows distinguish cards. Libre Caslon Display is used for the desktop homepage headline and the closing banner. Georgia remains the display fallback, and Segoe UI is the body sans serif. The shared header and cream footer use the same provisional coastal wave SVG and wordmark. The full-width booking banner uses layered terracotta and subtle procedural texture.

The container is capped at 85rem with fluid inline and section spacing. Typography scales with clamps. At 48rem the listing gains a second column. At 64rem the inline desktop navigation and optional split detail layout appear. Use visible focus, touch-sized controls, intrinsic image dimensions and mobile art direction.

Mockups contain embedded artwork and conflicting room details. Obtain standalone production assets and verify amenities, capacities, rates, policies, social URLs and local guide content before incorporating those elements into the site.
