# Table / Data Grid Component Blueprint

## 1. Purpose
To display structured datasets in rows and columns, enabling users to scan, compare, sort, and manipulate individual or batched records.

**Headless-First Principle**: This component represents a headless behavioral model. Data state, sorting, selection, pagination, filtering, and expansion are behavioral capabilities, distinct from visual rendering. Rendering, styling, and layout consume these behaviors separately.

## 2. Usage Guidelines
### When to use
- Displaying large sets of homogeneous data.
- Comparing data across multiple dimensions (columns).
- Performing actions on specific records (edit, delete, select).
### When NOT to use
- Displaying simple key-value pairs (use Description List).
- Layout purposes (use Grid or Flexbox).
- Content that requires rich media previews (use Card Grid or List).

## 3. Table Anatomy & Roles
- **Container**: Outer wrapper handling overflow and borders.
- **Header (thead)**: Contains column labels and sorting controls.
- **Body (tbody)**: Contains data rows.
- **Row (tr)**: Single record.
- **Cell (td/th)**: Individual data point.
- **Footer (tfoot)**: Optional summaries or totals.
- **Toolbar**: Optional area above the table for global actions (Search, Filter).

## 4. Variants & Capabilities
- **Standard**: Basic data display.
- **Sortable**: Headers are interactive sort triggers. Sorting is triggered ONLY via column headers.
- **Selectable**: Rows contain leading checkboxes for batch actions. Selection occurs ONLY via explicit selection controls (checkboxes). Row click does NOT imply selection by default.
- **Striped**: Use `bg.subtle` on even/odd rows for readability.
- **Sticky Header**: Headers remain visible during scroll.

## 5. States
- **Loading**:
  - Skeleton rows or spinner overlay.
  - MUST preserve column widths to prevent layout shift.
- **Empty**:
  - Visible message/illustration when no data exists.
  - Interactive "Clear filters" action if emptiness is due to filtering.
- **Error**:
  - Banner or inline message indicating data fetch failure.
- **Row Hover**:
  - Visual feedback (`bg.subtle`) to track reading line.
  - Purely transient and informational.
  - MUST never override selected state.
- **Selected**:
  - Distinct background (`bg.subtle` or mixed with `action.primary` opacity).
  - Must persist independently of hover (e.g., stronger contrast or border).
  - Visually distinct from hover at all times.

## 6. Accessibility Contract
- **Markup**: Valid `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`.
- **Scope**: `scope="col"` for headers, `scope="row"` for primary identifiers.
- **Sorting**: `aria-sort` ("ascending", "descending", "none") on sortable headers.
- **Selection**: `aria-selected="true"` on selected rows. Selection state must be communicated to assistive technology.
- **Virtualization**: Use `aria-rowcount` and `aria-colcount` when rows/columns are virtualized or dynamically loaded.
- **Caption**: `<caption>` or `aria-labelledby` describing the table content.
- **Distinction**: Distinguish requirements for Read-only tables (static data) vs Selectable tables (interactive grids).

## 7. Token Consumption Rules
- **Backgrounds**:
  - Container/Header: `bg.surface` or `bg.subtle`.
  - Body Row: `bg.surface`.
  - Hover/Selected: `bg.subtle` (ensure contrast distinction).
- **Borders**:
  - Separators: `border.subtle` or `border.default`.
  - Outer Border: `border.default`.
- **Text**:
  - Headers: `text.secondary` (or `text.muted`), `weight.medium`.
  - Data: `text.primary`.
- **Actions**:
  - Inline action elements must follow Button/Icon Button semantic rules.
  - Do NOT arbitrarily use `action.primary`; usage must reflect intent (e.g., destructive vs secondary).

## 8. Density & Layout Rules
- **Density Modes**:
  - **Comfort**: `spacing.xl` vertical padding.
  - **Default**: `spacing.lg` vertical padding.
  - **Compact**: `spacing.md` vertical padding.
- **Typography**:
  - Compact mode may switch font size to `text.sm` from `text.base`.
- **Alignment**:
  - Text: Left aligned.
  - Numbers: Right aligned (tabular nums preferred).
  - Booleans/Actions: Center aligned.

## 9. Interaction & Keyboard Behavior
- **Focus**: Table container should be focusable if scrollable (`tabindex="0"`). Clarify focus order when sticky headers are present.
- **Navigation**:
  - **Tab**: Navigates between interactive elements inside cells.
  - **Arrow Keys**: Grid navigation (Up/Down/Left/Right) cell-to-cell if supported; must be explicitly documented.
  - **Enter/Space**: Activate focused controls (sort headers, checkboxes, buttons).
- **Isolation**: Inline row actions must be isolated from row-level click/selection and must not hijack row focus.
- **Sorting**: Enter/Space on header triggers sort.
- **Selection**: Space on checkbox selects row. Shift+Click for range selection (optional).

## 10. Composition & Extensibility
- **Pagination**: Rendered in Footer or separate Toolbar.
- **Action Column**: Dedicated column (usually last) for inline row actions (Edit/Delete).
- **Expandable Rows**: Additional details panel toggled via row click or chevron.
