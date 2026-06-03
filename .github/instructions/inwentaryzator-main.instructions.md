---
name: inwentaryzator-main-instructions
description: "Use when: developing Inwentaryzator 3001 features. Enforces React best practices, Tailwind + Material You design, JSDoc documentation, and layer-based architecture."
applyTo: "src/**"
---

# Inwentaryzator 3001 — Main Development Instructions

## Overview

**Inwentaryzator 3001** is a Polish-language IT asset management system for centralized organization resource tracking. This project uses:
- **React** (modern, functional components)
- **Tailwind CSS** (utility-first styling with Material You design tokens)
- **TypeScript** (for type safety and self-documentation)
- **Layer-based architecture** (components/, hooks/, utils/)

Inventory Manager 3001 is a web-based asset inventory system designed for IT departments and managed service providers.

The application provides centralized management of:

* Laptops
* Desktop computers
* Printers
* Monitors
* Network devices
* Other IT assets

The primary goal is to maintain an accurate inventory of company-owned equipment and its assignment to employees, locations, and departments.

---

## Technology Stack

### Frontend

* React 19
* TypeScript
* Vite
* TailwindCSS 4
* Material UI (MUI)
* React Router
* Zustand
* TanStack Query
* React Hook Form
* Zod

### Backend

* Node.js
* Fastify
* Prisma ORM
* MySQL

### Testing

* Vitest
* React Testing Library
* Playwright

### DevOps

* Docker
* Docker Compose
* ESLint
* Prettier
* Husky
* Commitlint

---

## Architecture Principles

* TypeScript Strict Mode enabled.
* Never use any.
* Prefer composition over inheritance.
* Business logic must not be placed inside UI components.
* Every form must use Zod validation.
* Global state must be managed using Zustand.
* API communication must be abstracted into dedicated services.
* Use feature-based folder structure.

---

## Design System

The entire application must follow Material You (Material Design 3).

Requirements:

* Rounded corners
* Large spacing
* Soft shadows
* Responsive design
* Mobile-first approach
* Light and dark theme support
* Accessibility-first design
* Consistent component behavior

---

## Source of Truth

The TODO.md file is the authoritative source of project state.

Before performing any work, every agent must:

1. Read TODO.md.
2. Verify task status.
3. Verify task assignment.
4. Verify task priority.

No work may begin without an active task in TODO.md.

---

## Development Workflow

No feature may be implemented unless it exists in TODO.md.

Every completed task must:

1. Update task status.
2. Pass review.
3. Update documentation.
4. Follow project architecture.
5. Follow Material You design rules.

---

## Code Style & Clarity

### JSDoc Requirements

All functions, components, and hooks **must** have comprehensive JSDoc comments, even simple ones.

**Format:**
```typescript
/**
 * Fetches IT asset devices filtered by status and location.
 * @param {string} status - Device status: "active", "inactive", "retired"
 * @param {string} location - Physical location code (e.g., "OFFICE-A1")
 * @returns {Promise<Device[]>} Array of matching devices
 * @throws {Error} If API connection fails
 * @example
 * const devices = await fetchDevices("active", "OFFICE-A1");
 */
export async function fetchDevices(status: string, location: string): Promise<Device[]> {
  // implementation
}
```

**For React Components:**
```typescript
/**
 * DeviceTable displays IT assets in a sortable, filterable table.
 * Supports bulk operations and status filtering.
 * 
 * @component
 * @param {DeviceTableProps} props - Component props
 * @param {Device[]} props.devices - Array of device objects
 * @param {(id: string) => void} props.onSelect - Callback when row is selected
 * @returns {JSX.Element} Table component
 * @example
 * <DeviceTable devices={devices} onSelect={handleSelect} />
 */
export function DeviceTable({ devices, onSelect }: DeviceTableProps): JSX.Element {
  // implementation
}
```

### Naming Conventions

- **Components:** PascalCase (`DeviceForm`, `AssetList`, `StatusBadge`)
- **Functions/Hooks:** camelCase (`fetchDevices`, `useAssetFilter`, `validateHostname`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_DEVICES`, `API_TIMEOUT`, `DEFAULT_PAGE_SIZE`)
- **Files:** Match exports (`DeviceForm.tsx`, `useAssetFilter.ts`, `constants.ts`)

### Readable Logic

- Functions should have a single clear purpose
- Keep functions under 50 lines when possible
- Use descriptive variable names over abbreviations (`deviceLocation` not `dLoc`)
- Avoid deeply nested conditionals; extract to helper functions

---

## Architecture: Layer-Based Organization

```
src/
├── components/          # Presentational UI components
│   ├── DeviceTable.tsx
│   ├── DeviceForm.tsx
│   ├── StatusBadge.tsx
│   └── ...
├── hooks/               # Custom React hooks
│   ├── useAssetFilter.ts
│   ├── useDeviceApi.ts
│   └── ...
├── utils/               # Pure utility functions
│   ├── validators.ts    # Input validation
│   ├── formatters.ts    # Data formatting (dates, strings)
│   ├── api.ts          # API client calls
│   └── constants.ts    # Project constants
├── types/               # TypeScript interfaces & types
│   └── index.ts        # Centralized type definitions
└── App.tsx
```

**Guidelines:**
- **components/**: UI-only, minimal business logic
- **hooks/**: Stateful logic, API calls, side effects
- **utils/**: Pure functions, no React dependencies
- **types/**: All interfaces, not scattered across files

---

## Tailwind CSS + Material You Design

### Material You Color Tokens

Define Material You palette in Tailwind config as custom colors. Use semantic names:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        "m3-primary": "#6750a4",
        "m3-on-primary": "#ffffff",
        "m3-surface": "#fffbfe",
        "m3-error": "#b3261e",
        "m3-success": "#2d6a4f",
        // ... more tokens
      }
    }
  }
}
```

### Usage Examples

```tsx
// Button with Material You styling
<button className="bg-m3-primary text-m3-on-primary px-6 py-3 rounded-full hover:bg-m3-primary/90">
  Dodaj urządzenie
</button>

// Card with Material You surface
<div className="bg-m3-surface border border-m3-outline rounded-lg p-4 shadow-sm">
  {/* content */}
</div>

// Error state
<div className="text-m3-error text-sm">
  Błąd: Nie udało się pobrać danych
</div>
```

**Do NOT mix:**
- Don't import Material UI (@mui/material) components alongside Tailwind utilities
- Custom Tailwind = full design control via utility classes

---

## TypeScript Best Practices

- Always export types from `types/index.ts`
- Use `interface` for object shapes, `type` for unions/utilities
- Define props interfaces for components:
  ```typescript
  interface DeviceTableProps {
    devices: Device[];
    onSelect: (id: string) => void;
    isLoading?: boolean;
  }
  ```
- Use strict mode in `tsconfig.json`

---

## API Integration

All API calls in `utils/api.ts` or custom hooks (e.g., `useDeviceApi.ts`):

```typescript
/**
 * Fetches device list from backend API.
 * @param {Object} filters - Query filters
 * @returns {Promise<Device[]>}
 */
export async function getDevices(filters: DeviceFilters): Promise<Device[]> {
  try {
    const response = await fetch("/api/devices", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  } catch (error) {
    console.error("Failed to fetch devices:", error);
    throw error;
  }
}
```

---

## Common Patterns

### Custom Hook for Data Fetching
```typescript
/**
 * Manages device data fetching and state.
 * @returns {Object} Device data, loading state, error, refetch function
 */
export function useDeviceApi() {
  const [devices, setDevices] = useState<Device[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchDevices = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getDevices();
      setDevices(data);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDevices();
  }, []);

  return { devices, isLoading, error, refetch: fetchDevices };
}
```

### Form Validation
```typescript
/**
 * Validates device form inputs.
 * @param {Partial<Device>} data - Form data to validate
 * @returns {Object} Errors object with field-level messages
 */
export function validateDeviceForm(data: Partial<Device>) {
  const errors: Record<string, string> = {};

  if (!data.name?.trim()) errors.name = "Nazwa urządzenia jest wymagana";
  if (!data.serialNumber?.trim()) errors.serialNumber = "Numer seryjny jest wymagany";

  return { isValid: Object.keys(errors).length === 0, errors };
}
```

---

## Code Review Checklist

- [ ] JSDoc comments on all functions/components
- [ ] TypeScript types defined (no `any`)
- [ ] Component props have interface
- [ ] Tailwind + Material You tokens used (no inline colors)
- [ ] API calls in hooks/utils, not in components
- [ ] File structure follows layers
- [ ] Tests included for business logic
- [ ] Error handling in async operations

---

## When to Deviate

These instructions are strong defaults. Deviate only when:
- Documenting library integrations or complex algorithms (extra detail ok)
- Performance optimization requires architectural changes (document why)
- New Material You tokens needed (update config + this guide)

For questions or edge cases, refer to this guide or create a discussion in your team's documentation.
