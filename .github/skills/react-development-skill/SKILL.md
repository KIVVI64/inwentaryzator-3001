---
name: react-development-skill
description: "A workspace skill for implementing React features consistently with TypeScript, reusable architecture, hooks, and tests."
---

# React Development Skill

## Objective
Implement React features consistently across the project.

## Workflow
1. Analyze requirements.
2. Define types.
3. Create reusable components.
4. Implement business logic.
5. Add validation.
6. Add tests.
7. Update documentation.

## Standards

### Required
- TypeScript
- Functional components
- Custom hooks
- Strong typing
- Reusable architecture

### Forbidden
- any
- Massive components
- Inline business logic
- Unused code
- Hardcoded values

## Folder Structure
feature/
├── components/
├── hooks/
├── services/
├── stores/
├── types/
└── tests/

## Notes
- Prioritize small reusable components over feature-specific monoliths.
- Keep business logic inside hooks or services, not inside presentational components.
- Ensure tests cover both UI behavior and core business logic.
- Use strict typing and avoid `any` in new code.
