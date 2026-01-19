# Pagination and Bulk Actions Component Blueprint

## 1. Purpose
To enable navigation through large datasets and facilitate efficient operations on multiple selected items simultaneously. This component manages the view range of data and the execution of batched commands.

## 2. Usage Guidelines
### When to use
- **Pagination**: Datasets exceeding 20-50 rows where performance or cognition would be impacted by loading all at once.
- **Bulk Actions**: Lists or tables where users need to apply substantially the same change to multiple records (e.g., Delete, Archive, Change Status).

### When NOT to use
- **Infinite Scroll**: explicit justification is required for infinite scroll in enterprise data views due to accessibility and orientation concerns. Discouraged by default.
- **Small Datasets**: If the entire dataset fits on one screen (< 20 items), show all items without pagination.

## 3. Pagination Types
- **Page-Based (Standard)**: Direct access to specific pages ("1, 2 ... 10"). Best for knowable, static datasets.
- **Cursor-Based (Next/Prev)**: Simple navigation when total count is unknown or expensive to calculate. ("< Prev | Next >").
- **Load More**: Manual trigger to append data. Useful for mobile lookups but less precise for deep diving.

## 4. Bulk Actions Model
- **Trigger**: Appears contextually when one or more items are selected.
- **Placement**: A dedicated "Selection Bar" or "Action Header" that replaces or overlays the standard table toolkit/filter bar.
- **Counter**: Clearly displays the number of selected items (e.g., "3 items selected").
- **Actions**:
  - **Primary**: Most common batch operation (e.g., "Assign").
  - **Secondary**: Overflow menu or less frequent actions.
  - **Destructive**: "Delete" or "Archive". Destructive actions must never be styled as the default or primary action.
- **Safety Rules**:
  - Disabled when selection count is 0.
  - Must never auto-apply without explicit user confirmation.
  - Bulk actions must respect and reflect the current selection scope (page vs dataset).

## 5. States
- **Pagination**:
  - **Default**: Links are interactive.
  - **Active**: Current page indicator (`bg.subtle` or `border.strong`).
  - **Disabled**: First/Last page controls when at boundaries.
- **Bulk Bar**:
  - **Inactive**: Hidden when selection count is 0.
  - **Active**: Visible, overlaid on table header or top toolbar area.
  - **Processing**: Actions disabled, showing loading indicator during batch execution.

## 6. Accessibility Contract
- **Navigation**: Pagination container must use `<nav>` with `aria-label="Pagination"`.
- **Current Page**: `aria-current="page"` on the active link.
- **Announcements**: Changing pages must announce the new range (e.g., "Showing 11 to 20 of 50 items").
- **Selection**: Selecting rows should announce the updated count of selected items to screen readers.
- **Focus**:
  - **Deterministic Behavior**: After page change, focus should move to the table container or the first data row.
  - **Avoid**: Scroll jumps, loss of reading position, focus traps, or unexpected focus resets.

## 7. Token Consumption Rules
- **Pagination**:
  - Links: `text.primary` (Default), `text.muted` (Disabled).
  - Active Page: `bg.subtle` or `border.focus` (or `border.strong`).
  - Hover: `bg.subtle`.
- **Bulk Bar**:
  - Background: `bg.elevated` or `bg.surface` (Standard). Avoid high-emphasis `action.primary` backgrounds except in exceptional, justified cases.
  - Text: `text.primary`.
  - Separator: `border.subtle`.

## 8. Layout & Density Rules
- **Pagination**:
  - Right-aligned or centered below the data container.
  - "Rows per page" selector usually left or right aligned adjacent to pagination.
  - Touch targets must remain 44px (min) even in compact desktop modes (use padding).
- **Bulk Bar**:
  - Spans the full width of the data container.
  - Height matches the standard toolbar height (`spacing.3xl`).

## 9. Interaction & Keyboard Behavior
- **Pagination**: Tab moves through page numbers/controls. Enter activates.
- **Bulk Selection**:
  - `Shift + Click` (or Space) on rows for range selection.
  - "Select All" checkbox in header toggles current page vs. entire dataset selection.
- **Escape**: Pressing Esc while Bulk Bar is active should ideally deselect all items (context dependent).
- **Confirmation**: Destructive bulk actions MUST trigger a Confirmation Modal clearly stating:
  - The action being taken.
  - The number of affected items.
  - The selection scope (page vs entire dataset).

## 10. Composition & Extensibility
- **Select All**: Logic must distinguish between "Select all on this page" and "Select all 5,000 items in dataset". Page-level vs dataset-level selection must be explicitly communicated.
