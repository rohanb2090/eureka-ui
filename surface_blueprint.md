# Surface / Card Component Blueprint

## 1. Purpose
To provide the foundational background and containment layers for the enterprise interface. Surfaces group related content, establish hierarchy through depth (layering) and borders, and provide consistent spacing and safe areas for interactive elements.

## 2. Usage Guidelines
### When to use
- **Page**: The base layer of the application view.
- **Panel**: Major layout areas (Sidebar, Top Navigation, Main Content Area).
- **Card**: Distinct, grouped content (Widgets, Tables, Form Sections, Data summaries) that requires separation from the base page.
- **Overlay**: Floating content that sits above the page (Dropdowns, Popovers, Tooltips).
- **Inset**: Recessed areas within a surface to contain data, logic, or code.

### When NOT to use
- Do not use a Card surface for every single paragraph or text block; avoid "card soup."
- Do not layer multiple Panels inside Panels unnecessarily (flatten the hierarchy).
- Do not use Overlays for primary workflow content (use full pages or panels instead).
- Overlays are not intended for full modal or blocking workflows. Dedicated Modal components must be used for blocking interactions.

## 3. Surface Roles & Variants
| Variant | Role | Semantic Background | Intended Use |
| :--- | :--- | :--- | :--- |
| **Page** | `region` | `bg.page` | The root background of the viewport. |
| **Panel** | `complementary` or `main` | `bg.surface` | Persistent app areas (nav, main stage) that blend with the page or stand slightly apart. ARIA role selection depends on placement and document structure; Panels should not introduce redundant landmarks. |
| **Card** | `article` or `section` | `bg.surface` | Standard atomic unit of grouping. Has borders in contrast to Panels. |
| **Inset** | `region` | `bg.subtle` | Recessed areas for logs, code, or secondary data sets. |
| **Overlay** | `dialog` or `region` | `bg.elevated` | Floating surfaces. Assumes elevation/shadow. |

## 4. States
- **Default**: Standard appearance. Cards usually have `border.default` in light mode, `border.subtle` in dark.
- **Interactive (Hover)**: If the surface is actionable (e.g., a clickable card), use `border.strong` or `action.primary` focus rings. Backgrounds should generally remain stable on interaction. Emphasis should be conveyed via borders, focus rings, or elevation. Background changes are reserved only for explicitly defined interactive patterns.
- **Selected**: Indicates active state. Uses `border.focus` or `bg.subtle`.
- **Disabled**: Lower opacity (`opacity.disabled`) applied to the entire container. Disabled surfaces must not contain interactive descendants that remain focusable or operable via keyboard.

## 5. Accessibility Contract
- **Contrast**: Content on surfaces must meet WCAG AA. `bg.surface` is designed to support `text.primary` and `text.secondary` optimally.
- **Borders**: In High Contrast mode or low-quality displays, surfaces must remain distinguishable. Use `border.default` to ensure separation between a Card and `bg.page`, especially in light mode.
- **Focus**: Interactive surfaces must display a visible focus ring (`border.focus`) that does not rely on color alone (ensure sufficient thickness or offset).

## 6. Token Consumption Rules
- **Backgrounds**:
  - Page: `bg.page`
  - Card/Panel: `bg.surface`
  - Inset: `bg.subtle`
  - Overlay: `bg.elevated`
- **Borders**:
  - Light Theme: Card uses `border.subtle` or `border.default`.
  - Dark Theme: Card uses `border.subtle` (lighter than background) or `border.default` to ensure edges are visible against `bg.page`.
  - Interactive: `border.focus` for focus states.
- **Backdrop**: `bg.overlay` for modal backdrops.

## 7. Density & Layout Rules
- **Spacing**:
  - `padding` must use semantic spacing tokens (e.g., `spacing.lg` for default cards, `spacing.md` for dense cards).
  - Do NOT use arbitrary pixel values.
- **Radius**:
  - Default: `radius.md` (4px) for Cards and Panels.
  - Overlay: `radius.md` or `radius.lg` depending on size.
  - Inset: `radius.sm` (2px).
- **Structure**: Surfaces should own their padding. Content inside should not need negative margins.

## 8. Composition & Extensibility
- **Header/Footer**: Cards may have distinct header/footer areas, often separated by `border.subtle`.
- **Dividers**: Use `border.subtle` for horizontal separators within surfaces.
- **Clickable**: Any surface can be made interactive, but must adopt proper ARIA roles (`button`, `link`) and keyboard behavior (Enter/Space to activate).
