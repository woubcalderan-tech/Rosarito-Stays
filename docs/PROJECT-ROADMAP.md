# Project roadmap

Rosarito Stays is a fictional hospitality demo, a development portfolio showcase, a reusable template, and a full-stack learning project. The approved homepage, existing routes, architecture, and Git history are the baseline.

| Phase                                 | Work and completion criteria                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0. Conversion audit                   | Complete. Documented architecture and the legacy photo inventory.                                                                                                                                                                                                                                                                                                |
| 1. Fictional identity and photography | Complete in v0.3.0-preview. Approved desktop and mobile homepage, fictional photography, and site-wide disclosure.                                                                                                                                                                                                                                               |
| 2. Reusable property configuration    | Complete in v0.4.0-preview. Typed property profiles now supply branding, content, suites, photography references, contact, and booking defaults. The demo and neutral standard build have separate profiles.                                                                                                                                                     |
| 3. Portfolio content                  | A1–A6 complete in v0.5.0-preview, Accommodations & Suite Details. Includes responsive listings and details, five-photo suite galleries, and the mobile booking demonstration. Residence is complete in v0.6.0-preview. Property Details is complete in v0.7.0-preview. Explore Rosarito is next. Use clear fictional copy and skip any unconfigured destination. |
| 4. Availability demo                  | Start with seeded data and a mock service, then move to an isolated demo database. Return simulated availability by suite and date. Test date boundaries, outages, and empty inventory.                                                                                                                                                                          |
| 5. Reservation demo                   | Add simulated reservation state and conflict checks. Use server validation, atomic writes, idempotency, and resettable records. Keep public input to synthetic data and present confirmation as a simulation.                                                                                                                                                    |
| 6. Administration demo                | Implement an isolated admin exercise using demo identities and role-based access. Exercise authorization, audit events, and inventory editing against synthetic records. Expose a read-only walkthrough if the public demo cannot reset write access safely.                                                                                                     |
| 7. Payment simulation                 | Simulate success, decline, cancellation, and duplicate events with a mock adapter. An optional provider sandbox exercise must use test credentials and test fixtures. Keep card entry, payment collection, payouts, and live provider configuration outside the demo.                                                                                            |
| 8. Template handoff                   | Document setup, configuration, assets, deployment, and accessibility checks. Verify the demo and client configurations have separate data, credentials, and hosting. Keep client integrations as future project work.                                                                                                                                            |

## Residence sequence

1. R1 — Residence Photography Preparation. Integrated into the shared responsive image catalog.
2. R2 — Desktop Residence Page. Visually approved.
3. R3 and R3.1 — Mobile Residence Page and Visual Corrections. Visually approved.
4. R4 — The Residence Final Validation and Release. Included in v0.6.0-preview.

The dedicated Residence Gallery page remains deferred.

## Final frontend polish backlog

- Review browser-dependent date placeholder localization.
- Review duplicate calendar icons in mobile date fields.
- Consider a clearer Private Balcony amenity icon.

Availability, reservations, and payments remain simulations in this release.

## Learning checkpoint

After every implementation task, report what changed, the concepts used, the relevant files, how data and control flow across them, and what to study next. Topics in sequence include typed configuration, responsive image selection, service boundaries, date-range validation, database transactions, authorization, and idempotent event handling.

## Property Details sequence

1. P1 — Photography Preparation and Configuration Audit. Completed with two PNG masters, eight responsive WebPs, existing photo reuse, and a shared guest policy configuration.
2. P2 — Desktop Property Details. Complete and visually approved.
3. P3 — Mobile Property Details. Complete and visually approved, including three shared facility cards and the expandable cream footer.
4. P4 — Final validation and release. Included in v0.7.0-preview.

Explore Rosarito is the next development milestone. The dedicated Residence gallery remains deferred.
