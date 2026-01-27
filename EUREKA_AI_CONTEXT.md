# Eureka UI - AI Context

> This file is auto-generated. Paste this entire file into AI tools like Lovable, Bolt, or ChatGPT to give them context about the design system.

## 1. Design Tokens (design-tokens.json)
```json
{"global":{"color":{"rich-black":{"value":"#0c0c16","type":"color"},"medium-slate-blue":{"value":"#6666ff","type":"color"},"periwinkle":{"value":"#b8baff","type":"color"},"columbia-blue":{"value":"#c9e8ff","type":"color"},"celadon":{"value":"#b9f0d7","type":"color"},"bg-page":{"value":"var(--color-rich-black)","type":"color"},"bg-surface":{"value":"var(--gray-900)","type":"color"},"bg-subtle":{"value":"var(--gray-800)","type":"color"},"bg-elevated":{"value":"var(--gray-700)","type":"color"},"text-primary":{"value":"#ffffff","type":"color"},"text-secondary":{"value":"var(--color-periwinkle)","type":"color"},"text-tertiary":{"value":"var(--gray-400)","type":"color"},"text-disabled":{"value":"var(--gray-600)","type":"color"},"text-inverse":{"value":"var(--gray-950)","type":"color"},"border-default":{"value":"var(--gray-700)","type":"color"},"border-subtle":{"value":"var(--gray-800)","type":"color"},"border-strong":{"value":"var(--gray-600)","type":"color"},"border-focus":{"value":"var(--color-periwinkle)","type":"color"},"action-primary":{"value":"var(--color-periwinkle)","type":"color"},"action-primary-hover":{"value":"var(--color-columbia-blue)","type":"color"},"action-primary-active":{"value":"#a0a0ff","type":"color"},"action-secondary":{"value":"var(--gray-800)","type":"color"},"action-secondary-hover":{"value":"var(--gray-700)","type":"color"},"action-destructive":{"value":"#ef4444","type":"color"},"action-destructive-hover":{"value":"#f87171","type":"color"},"action-text-on-primary":{"value":"var(--gray-950)","type":"color"},"status-info":{"value":"var(--color-medium-slate-blue)","type":"color"},"status-info-subtle":{"value":"rgba(102, 102, 255, 0.15)","type":"color"},"status-success":{"value":"var(--color-celadon)","type":"color"},"status-success-subtle":{"value":"rgba(185, 240, 215, 0.15)","type":"color"},"status-warning":{"value":"#fbbf24","type":"color"},"status-warning-subtle":{"value":"rgba(251, 191, 36, 0.15)","type":"color"},"status-error":{"value":"#ef4444","type":"color"},"status-error-subtle":{"value":"rgba(239, 68, 68, 0.15)","type":"color"},"status-neutral":{"value":"var(--gray-400)","type":"color"},"status-neutral-subtle":{"value":"var(--gray-800)","type":"color"},"chart-1":{"value":"oklch(0.6801 0.1583 276.9349)","type":"color"},"chart-2":{"value":"oklch(0.7845 0.1325 181.9120)","type":"color"},"chart-3":{"value":"oklch(0.8790 0.1534 91.6054)","type":"color"},"chart-4":{"value":"oklch(0.7253 0.1752 349.7607)","type":"color"},"chart-5":{"value":"oklch(0.8003 0.1821 151.7110)","type":"color"}},"spacing":{"xs":{"value":"4px","type":"spacing"},"sm":{"value":"8px","type":"spacing"},"md":{"value":"12px","type":"spacing"},"lg":{"value":"16px","type":"spacing"},"xl":{"value":"24px","type":"spacing"},"2xl":{"value":"32px","type":"spacing"},"3xl":{"value":"40px","type":"spacing"},"4xl":{"value":"48px","type":"spacing"}},"borderRadius":{"sm":{"value":"0px","type":"borderRadius"},"md":{"value":"0px","type":"borderRadius"},"lg":{"value":"0px","type":"borderRadius"},"pill":{"value":"9999px","type":"borderRadius"}}}}
```

## 2. Tailwind Configuration (tailwind.config.js)
```javascript
module.exports = {
    content: ['./src*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                bg: {
                    page: 'var(--bg-page)',
                    surface: 'var(--bg-surface)',
                    subtle: 'var(--bg-subtle)',
                    elevated: 'var(--bg-elevated)',
                },
                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                    tertiary: 'var(--text-tertiary)',
                    disabled: 'var(--text-disabled)',
                    inverse: 'var(--text-inverse)',
                },
                border: {
                    DEFAULT: 'var(--border-default)',
                    subtle: 'var(--border-subtle)',
                    strong: 'var(--border-strong)',
                    focus: 'var(--border-focus)',
                },
                action: {
                    primary: 'var(--action-primary)',
                    'primary-hover': 'var(--action-primary-hover)',
                    'primary-active': 'var(--action-primary-active)',
                    secondary: 'var(--action-secondary)',
                    'secondary-hover': 'var(--action-secondary-hover)',
                    destructive: 'var(--action-destructive)',
                    'destructive-hover': 'var(--action-destructive-hover)',
                    'text-on-primary': 'var(--action-text-on-primary)',
                },
                status: {
                    info: 'var(--status-info)',
                    success: 'var(--status-success)',
                    warning: 'var(--status-warning)',
                    error: 'var(--status-error)',
                },
                chart: {
                    1: 'var(--chart-1)',
                    2: 'var(--chart-2)',
                    3: 'var(--chart-3)',
                    4: 'var(--chart-4)',
                    5: 'var(--chart-5)',
                },
            },
            spacing: {
                xs: 'var(--spacing-xs)',
                sm: 'var(--spacing-sm)',
                md: 'var(--spacing-md)',
                lg: 'var(--spacing-lg)',
                xl: 'var(--spacing-xl)',
                '2xl': 'var(--spacing-2xl)',
                '3xl': 'var(--spacing-3xl)',
                '4xl': 'var(--spacing-4xl)',
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
                pill: 'var(--radius-pill)',
            },
            opacity: {
                disabled: 'var(--opacity-disabled)',
            },
            fontFamily: {
                sans: ['"IBM Plex Sans"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

```

## Component: button_blueprint.md

# Button Component Blueprint

### Variants
| Variant | Intent | Semantic Tokens | Intended Use |
| :--- | :--- | :--- | :--- |
| **Primary** | High Priority | Bg: `action.primary`<br>Text: `text.inverse` | The single most important action on the screen. |
| **Secondary** | Medium Priority | Bg: `bg.surface` (or transparent)<br>Border: `border.default`<br>Text: `text.primary` | Standard actions, "Cancel" buttons, form options. |
| **Destructive** | Warning/Danger | Bg: `action.destructive`<br>Text: `text.inverse` | Irreversible data removal. Destructive buttons must never be the default focused action on initial render. |
| **Ghost/Utility** | Low Priority | Bg: Transparent<br>Text: `text.secondary` | Toolbar icons, table row actions. Ghost or Utility buttons may reduce visual emphasis, but must remain discoverable via keyboard focus and must not rely solely on hover for visibility. |


## 3. Variants & Intent
## 6. Token Consumption Rules
## 5. Accessibility Contract


## Component: chart_components_blueprint.md

# Chart Components Blueprint

## Overview
Data visualization components following Eureka UI principles: headless-first, accessible, and token-based styling.

---

## Components

### 1. BarChart
**Purpose**: Compare categorical data across different groups

**Visual Characteristics:**
- Vertical or horizontal orientation
- Bars use semantic colors (status or custom)
- Grid lines use `--border-subtle`
- Labels use `--text-secondary`

**Props:**
- `data: Array<{ label: string; value: number; color?: string }>`
- `orientation: 'vertical' | 'horizontal'`
- `showGrid: boolean`
- `showLabels: boolean`
- `barWidth?: number`

**Accessibility:**
- `role="img"` with `aria-label`
- Data table alternative via toggle
- Keyboard navigation through bars

---

### 2. LineChart
**Purpose**: Show trends over time or continuous data

**Visual Characteristics:**
- Line uses `--action-primary` or custom semantic color
- Points use same color with white fill
- Grid uses `--border-subtle`
- Axes use `--text-s
... (truncated)

## Component: empty_state_blueprint.md

# Empty State Component Blueprint

## 1. Purpose
To communicate the absence of data, guide the user on next steps, or explain why content is missing. Empty states prevent confusion and offer a path forward (e.g., "Create new item" or "Clear filters").

**Tone Governance**: Messaging must be neutral, informative, and non-judgmental. Prohibit blaming or instructional language such as "You did not..." or "You forgot...". Emphasize system status over user behavior. Avoid celebratory or marketing-heavy copy.

## 2. Usage Guidelines
### When to use
- Initial first-run experience (fresh account, no items yet).
- User-cleared lists (inbox zero).
- Search results yielding no matches.
- Filtered views that exclude all current items.
- Non-blocking error states (widget failed to load but page is intact).

### When NOT to use
- Loading states (use Skeleton or Spinner).
- Critical system failures (use Toast, Banner, or Error Page). Empty States are only for recoverable, non-blocking, context-specif
... (truncated)

## Component: form_controls_blueprint.md

# Form Controls Component Blueprint

## 6. Token Consumption Rules
## 5. Accessibility Contract


## Component: inline_alert_blueprint.md

# Inline Alert Component Blueprint

## 1. Purpose
To provide contextual feedback, warnings, or information about specific data or sections within a page. Inline alerts are embedded within the content flow and do not obscure other elements.

**Tone Governance**: Alerts must be calm, informative, and helpful. Avoid alarmist language (e.g., "Critical Failure!"), blaming the user, or excessive use of exclamation marks.

## 2. Usage Guidelines
### When to use
- **Section-level Validation**: Feedback on form submissions (success or total failure summary). Field-level validation errors belong adjacent to the field.
- **System Status**: Maintenance notices or system-wide announcements relevant to the current view.
- **Contextual Warning**: Cautionary advice about a specific action requiring user attention (e.g., "Deleting this will affect 5 linked accounts").
- **Information**: Helpful context or tips (e.g., "This feature is in beta").

### When NOT to use
- **Blocking Critical Errors**: Use M
... (truncated)

## Component: loading_skeletons_blueprint.md

# Loading & Skeletons Component Blueprint

## 1. Purpose
To preserve user orientation, reduce perceived latency, and prevent layout shift while content is loading. Loading states communicate in-progress data retrieval without blocking interaction or introducing visual instability.

**Tone Governance**: Loading states must be neutral, non-blocking, and non-alarming. They represent incomplete data, not errors.

## 2. Usage Guidelines
### When to use
- **Skeletons**: Preferred for structured content (tables, cards, lists) where layout is predictable and content shape is known.
- **Spinners**: Short, indeterminate waits (< 2 seconds) where layout is unpredictable or minimal.
- **Page-level**: Initial page load or navigation.
- **Section-level**: Widget or panel data fetch.
- **Component-level**: Individual table, card, or form data.

### When NOT to use
- **Instant Operations**: Actions completing in < 200ms should show no loading indicator.
- **Error States**: Use Inline Alert or Toast fo
... (truncated)

## Component: pagination_bulk_actions_blueprint.md

# Pagination and Bulk Actions Component Blueprint



## Component: surface_blueprint.md

# Surface / Card Component Blueprint

### Variants
| Variant | Role | Semantic Background | Intended Use |
| :--- | :--- | :--- | :--- |
| **Page** | `region` | `bg.page` | The root background of the viewport. |
| **Panel** | `complementary` or `main` | `bg.surface` | Persistent app areas (nav, main stage) that blend with the page or stand slightly apart. ARIA role selection depends on placement and document structure; Panels should not introduce redundant landmarks. |
| **Card** | `article` or `section` | `bg.surface` | Standard atomic unit of grouping. Has borders in contrast to Panels. |
| **Inset** | `region` | `bg.subtle` | Recessed areas for logs, code, or secondary data sets. |
| **Overlay** | `dialog` or `region` | `bg.elevated` | Floating surfaces. Assumes elevation/shadow. |


## 6. Token Consumption Rules
## 5. Accessibility Contract


## Component: table_blueprint.md

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
- **Header (thead)**: Contains column l
... (truncated)

## Component: toast_blueprint.md

# Toast / Notifications Component Blueprint

## 1. Purpose
To provide transient, global system feedback for background operations, confirmations, or non-critical updates. Toasts appear temporarily, do not block interaction, and disappear automatically.

**Tone Governance**: Messages must be neutral, concise, and non-blaming. Maximum 2 lines of text. Avoid alarming language or unnecessary details.

## 2. Usage Guidelines
### When to use
- **Success Confirmations**: "File uploaded successfully", "Settings saved".
- **Background Errors**: Non-blocking errors that don't prevent workflow continuation.
- **Undo Actions**: "Item deleted" with Undo button.
- **System Notifications**: Background sync status, connection restored.

### When NOT to use
- **Form Validation**: Use field-level or Inline Alert feedback.
- **Blocking Errors**: Use Modal or Error Page.
- **Persistent Information**: Use Inline Alert or Banner.
- **Critical Warnings**: Use Modal with explicit confirmation.

## 3. Notifica
... (truncated)

## Component: typography_blueprint.md

# Typography Component Blueprint

### Variants
| Variant | Tag | Semantic Token | Intended Use |
| :--- | :--- | :--- | :--- |
| **HeadingXL** | `h1` | `text.primary` | Page titles, major dashboard sections. |
| **HeadingLG** | `h2` | `text.primary` | Section headers, card titles. |
| **Body** | `p`, `span`, `div` | `text.primary` | Standard content, table cells, inputs. |
| **BodySecondary** | `p`, `span` | `text.secondary` | Description text, supporting details. |
| **Label** | `label`, `span` | `text.secondary` | Form field labels, column headers. |
| **Meta** | `span` | `text.muted` | Timestamps, footnotes, non-critical info. |
| **Mono** | `code`, `pre` | `text.primary` | Transaction IDs, code snippets, raw data values. |


## 6. Token Consumption Rules
## 5. Accessibility Contract


