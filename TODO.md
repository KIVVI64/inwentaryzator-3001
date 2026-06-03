# TODO — Inwentaryzator 3001

## Project Overview

**Phase 1 (Current)**: Demo UI with asset list view and mock data
**Phase 2 (Future)**: Backend API integration, authentication, database
**Phase 3 (Future)**: Advanced features (reporting, bulk operations, etc.)

---

## Phase 1: Demo Asset List UI (Priority: High)

### Epic: Asset List Page with Mock Data

#### Task Group: Type Definitions & Constants

| ID       | Task                                        | Priority | Status    | Dependencies |
| -------- | ------------------------------------------- | -------- | --------- | ------------ |
| TYPE-001 | Define Device/Asset TypeScript interface   | High     | Done      | None         |
| TYPE-002 | Define API request/response types           | High     | Ready     | None         |
| TYPE-003 | Create asset status enum (Active, Inactive, Retired, In Repair) | High | Done | None |
| CONST-001 | Create constants file (defaults, limits, status labels) | High | Done | None |

#### Task Group: Mock Data Generation

| ID       | Task                                        | Priority | Status    | Dependencies |
| -------- | ------------------------------------------- | -------- | --------- | ------------ |
| MOCK-001 | Create mock device data generator (100+ sample assets) | High | Done | TYPE-001, TYPE-003 |
| MOCK-002 | Add realistic asset attributes (serial, location, user, purchase date) | High | Done | MOCK-001 |
| MOCK-003 | Create mock data export/loader utility    | High | Ready | MOCK-001 |

#### Task Group: Asset List Component

| ID       | Task                                        | Priority | Status    | Dependencies |
| -------- | ------------------------------------------- | -------- | --------- | ------------ |
| UI-LIST-001 | Create AssetListPage component structure | High | Ready | TYPE-001 |
| UI-LIST-002 | Build AssetTable component with columns (Name, Serial, Location, Owner, Status, Purchase Date) | High | Ready | TYPE-001, UI-LIST-001 |
| UI-LIST-003 | Add table sorting functionality (click headers) | Medium | Ready | UI-LIST-002 |
| UI-LIST-004 | Add basic table filtering/search by asset name | Medium | Ready | UI-LIST-002 |
| UI-LIST-005 | Add status color badges (Active=green, Inactive=gray, Retired=red, In Repair=yellow) | High | Ready | UI-LIST-002, TYPE-003 |

#### Task Group: Layout & Navigation

| ID       | Task                                        | Priority | Status    | Dependencies |
| -------- | ------------------------------------------- | -------- | --------- | ------------ |
| UI-NAV-001 | Create main layout component with navigation bar | High | Ready | None |
| UI-NAV-002 | Add navigation link to Assets page        | High | Ready | UI-NAV-001, UI-LIST-001 |
| UI-NAV-003 | Add Material You styling to navigation    | High | Ready | UI-NAV-001 |

#### Task Group: Styling & Polish

| ID       | Task                                        | Priority | Status    | Dependencies |
| -------- | ------------------------------------------- | -------- | --------- | ------------ |
| STYLE-001 | Apply Material You design tokens to AssetTable | Medium | Ready | UI-LIST-002 |
| STYLE-002 | Add responsive design (mobile, tablet, desktop) | Medium | Ready | UI-LIST-002 |
| STYLE-003 | Implement light/dark theme toggle button | Low | Ready | UI-LIST-001 |

#### Task Group: Testing & Documentation

| ID       | Task                                        | Priority | Status    | Dependencies |
| -------- | ------------------------------------------- | -------- | --------- | ------------ |
| TEST-001 | Write unit tests for mock data generator  | Medium | Ready | MOCK-001 |
| TEST-002 | Write unit tests for AssetTable component | Medium | Ready | UI-LIST-002 |
| TEST-003 | Update JSDoc comments for all new functions | High | Ready | All code components |
| DOC-001  | Add screenshots/demo instructions to README | Low | Ready | Phase 1 complete |

---

## Completed Tasks (Phase: Setup)

| ID       | Task                                        | Status  |
| -------- | ------------------------------------------- | ------- |
| INIT-001 | Remove React/Vite boilerplate              | Done    |
| INIT-002 | Update app name to Inwentaryzator 3001     | Done    |
| INIT-003 | Create main page with app description      | Done    |
| INIT-004 | Remove mock/sample assets                  | Done    |

---

## Status Reference

- **Backlog** — Not started, lower priority
- **Ready** — Ready to start, unblocked
- **In Progress** — Currently being worked on
- **Blocked** — Cannot progress due to dependency
- **Review** — Waiting for code review
- **Done** — Completed and merged

---

## Notes

- All components must follow Material You design
- All functions require JSDoc comments
- Mock data must be realistic (actual device types, reasonable dates, etc.)
- First task to start: TYPE-001 (define Device interface)

