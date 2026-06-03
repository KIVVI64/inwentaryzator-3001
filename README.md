# Inwentaryzator 3001

System do zarządzania zasobami IT w organizacji.

## Cel projektu

Inwentaryzator 3001 ma umożliwiać centralne zarządzanie:

* komputerami stacjonarnymi
* laptopami
* drukarkami
* urządzeniami sieciowymi
* monitorami
* telefonami służbowymi
* innymi zasobami IT

System ma być prosty, szybki i intuicyjny dla działów IT.

---

## Główne funkcjonalności

### Zarządzanie urządzeniami

* dodawanie urządzeń
* edycja urządzeń
* usuwanie urządzeń
* filtrowanie
* wyszukiwanie

### Dane urządzenia

Przykładowe pola:

* Nazwa urządzenia
* Hostname
* Producent
* Model
* Numer seryjny
* Lokalizacja
* Status
* Użytkownik
* Adres IP
* System operacyjny
* Data zakupu
* Data gwarancji

### Zarządzanie użytkownikami

* przypisywanie sprzętu
* historia zmian
* podgląd aktywnych zasobów

### Raporty

* eksport CSV
* eksport XLSX
* statystyki infrastruktury

---

## Stos technologiczny

Frontend:

* React
* TypeScript
* Vite
* TailwindCSS
* Radix UI
* shadcn/ui
* Zustand
* TanStack Query

Backend:

* Node.js
* Express
* Prisma
* MySQL

Testy:

* Vitest
* Playwright

---

## Design System

Projekt wykorzystuje Material You.

Założenia:

* zaokrąglone komponenty
* duże odstępy
* dynamiczne kolory
* responsywność mobile-first
* minimalistyczne formularze

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
