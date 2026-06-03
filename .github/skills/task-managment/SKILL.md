---
name: task-managment
description: This skill defines how all agents interact with TODO.md. The TODO.md file is the single source of truth for project progress. Agents must never work on tasks that are not listed in TODO.md.
---

# Task Management Skill

## Purpose

This skill defines how all agents interact with TODO.md.

The TODO.md file is the single source of truth for project progress.

Agents must never work on tasks that are not listed in TODO.md.

---

# Task Lifecycle

Every task must follow the lifecycle below:

Backlog
→ Ready
→ In Progress
→ Review
→ Done

Alternative path:

Backlog
→ Ready
→ In Progress
→ Blocked

Blocked
→ In Progress

---

# Task Ownership

## Project Manager

Responsible for:

* Managing task statuses
* Prioritizing work
* Assigning tasks to Lead Developer
* Monitoring progress
* Resolving workflow conflicts

Project Manager never writes production code.

---

## Lead Developer

Responsible for:

* Reviewing assigned tasks
* Breaking tasks into subtasks when necessary
* Delegating implementation work
* Reviewing completed work
* Approving tasks for completion

Lead Developer cannot directly mark tasks as Done.

---

## Specialist Agents

Examples:

* Frontend Agent
* Backend Agent
* UI/UX Agent
* Database Agent

Responsible for:

* Implementing assigned work
* Updating progress notes
* Reporting blockers
* Requesting review when implementation is complete

Specialist agents cannot modify task priority.

---

# Priority Levels

## Critical

Production blocking issue.

Must be completed immediately.

Examples:

* Application cannot start
* Data corruption
* Security vulnerability

---

## High

Required for MVP completion.

Examples:

* Core asset management
* Dashboard
* Authentication

---

## Medium

Important but not required for MVP.

Examples:

* Reports
* Analytics
* Advanced filtering

---

## Low

Nice-to-have improvements.

Examples:

* Visual enhancements
* Optional integrations

---

# Task Structure

Every task must follow this format:

| ID | Priority | Status | Assignee | Task |
| -- | -------- | ------ | -------- | ---- |

Example:

| FE-001 | High | Ready | Frontend Agent | Create application layout |

---

# Agent Workflow

## Step 1

Project Manager reads TODO.md.

---

## Step 2

Project Manager selects the highest-priority task from Ready.

---

## Step 3

Task status becomes:

In Progress

---

## Step 4

Lead Developer reviews requirements.

---

## Step 5

Lead Developer assigns implementation to the appropriate specialist agent.

---

## Step 6

Implementation is completed.

Task status remains:

In Progress

until implementation is fully finished.

---

## Step 7

Agent adds completion notes.

Task status becomes:

Review

---

## Step 8

Lead Developer performs review.

Review checklist:

* Architecture compliance
* Code quality
* Type safety
* Performance
* Accessibility
* Maintainability

---

## Step 9

If review passes:

Review → Done

If review fails:

Review → In Progress

with review comments.

---

# Blocked Tasks

A task becomes Blocked only when:

* Missing requirements
* Missing dependency
* Technical limitation
* External dependency

Blocked tasks must include:

* Blocker reason
* Required action
* Responsible party

Example:

Status: Blocked

Reason:
Waiting for database schema definition.

Owner:
Lead Developer

---

# Progress Notes

Every task update must include a short note.

Example:

[2026-06-03]
Frontend Agent

Completed:

* Layout
* Navigation Drawer
* Theme Provider

Remaining:

* Responsive menu

Progress:
80%

---

# Completion Criteria

A task may be marked Done only if:

* Implementation completed
* Review completed
* No blockers remain
* Documentation updated
* Project builds successfully
* Tests pass

---

# Important Rules

1. Never work on tasks not listed in TODO.md.
2. Never skip Review status.
3. Never mark your own task as Done.
4. Always update progress notes.
5. TODO.md is the authoritative project state.
6. If TODO.md conflicts with agent instructions, TODO.md takes precedence.
7. One task may only have one active assignee at a time.
8. Multiple agents may collaborate only through Lead Developer coordination.
