# Typography Component Blueprint

## 1. Purpose
To provide a unified, accessible, and density-optimized text system for enterprise dashboards. This component is responsible for rendering all text content, ensuring consistent type hierarchy, contrast compliance, and semantic HTML structure without enforcing visual styling directly.

## 2. Usage Guidelines
### When to use
- All visible text content within the application.
- Headings, body copy, form labels, data table cell content, and system metadata.
- Displaying code snippets, identifiers (IDs), or mono-spaced data.

### When NOT to use
- Icons or graphical elements.
- Text embedded within complex SVG charts (use Dataviz specific labels instead).
- Legacy application parts not using the design system tokens.

## 3. Variants
Variant names represent hierarchical intent, not absolute size. Responsive or density-based scaling is handled via tokens, not variant names.

| Variant | Tag | Semantic Token | Intended Use |
| :--- | :--- | :--- | :--- |
| **HeadingXL** | `h1` | `text.primary` | Page titles, major dashboard sections. |
| **HeadingLG** | `h2` | `text.primary` | Section headers, card titles. |
| **Body** | `p`, `span`, `div` | `text.primary` | Standard content, table cells, inputs. |
| **BodySecondary** | `p`, `span` | `text.secondary` | Description text, supporting details. |
| **Label** | `label`, `span` | `text.secondary` | Form field labels, column headers. |
| **Meta** | `span` | `text.muted` | Timestamps, footnotes, non-critical info. |
| **Mono** | `code`, `pre` | `text.primary` | Transaction IDs, code snippets, raw data values. |

## 4. States
Error and Success states are intended only for inline validation and contextual feedback, not for global alerts or notifications.

- **Default**: Standard state using the base semantic color for the variant.
- **Muted**: Explicit override to lower visual priority (uses `text.muted`).
- **Inverse**: For use on dark or colored backgrounds (uses `text.inverse`).
- **Disabled**: Indicates non-interactivity (uses `text.disabled`).
- **Error**: For validation messages or critical alerts (uses `status.error`).
- **Success**: For positive confirmation (uses `status.success`).

## 5. Accessibility Contract
- **Contrast**: All default pairings of `text.primary` and `text.secondary` against `bg.page` or `bg.surface` must meet WCAG AA (4.5:1).
- **Resizing**: Text must support 200% zoom without loss of content or functionality.
- **HTML Semantics**: The component must render semantically appropriate tags (`h1`-`h6`, `label`, `p`) by default but allow polymorphism (e.g., specific visual style with a different tag) when necessary for document structure.
- **Polymorphism**: Polymorphic rendering must not break the document outline order. Visual headings rendered as non-heading tags must not replace required h1–h6 elements for page structure.
- **ARIA**: Disabled states must include `aria-disabled="true"`.

## 6. Token Consumption Rules
- **Font Family**:
  - Default: `typography.family.sans`
  - Mono variant: `typography.family.mono`
- **Font Size**:
  - HeadingXL: `typography.size.xl`
  - HeadingLG: `typography.size.lg`
  - Body: `typography.size.base`
  - Label/Meta: `typography.size.sm` or `typography.size.xs`
- **Font Weight**:
  - Headings: `typography.weight.semibold`
  - Body: `typography.weight.regular`
  - Label: `typography.weight.medium`
- **Color**:
  - MUST reference `text.*` or `status.*` semantic tokens.
  - NEVER reference primitive `color.neutral.*` tokens directly.

## 7. Composition & Extensibility
- **Truncation**: Valid prop to enforce single-line truncation with ellipsis for dense tables.
- **Alignment**: Supports `left`, `center`, `right`, and `justify` props.
- **Nesting**: Typography components should be composable but avoid nesting block-level elements inside inline text elements.
- **Internationalization**: Must support `dir="auto"` or explicit RTL handling for global enterprise usage.
