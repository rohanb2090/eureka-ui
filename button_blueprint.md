# Button Component Blueprint

## 1. Purpose
To trigger an action or event, such as submitting a form, canceling a process, or toggling a state. Buttons communicate the priority of actions via visual hierarchy and provide predictable interactive feedback.

## 2. Usage Guidelines
### When to use
- **Primary**: The main action in a specific context (e.g., "Save", "Submit"). Use only once per view or section. In multi-step workflows or data tables, multiple Primary buttons may exist only if they represent the same action repeated across steps or rows.
- **Secondary**: Alternative actions (e.g., "Cancel", "Back"). Can be used multiple times.
- **Destructive**: Actions that remove data or have negative consequences (e.g., "Delete").
- **Utility/Inline**: Low-emphasis actions, often inside tables or toolbars (e.g., "Edit" icon, "Filter").

### When NOT to use
- Do not use Buttons for navigation to a new page (use Links, unless it's a wizard/flow step).
- Do not use destructive styling for reversable actions.
- Avoid using multiple Primary buttons in the same container.

## 3. Variants & Intent
| Variant | Intent | Semantic Tokens | Intended Use |
| :--- | :--- | :--- | :--- |
| **Primary** | High Priority | Bg: `action.primary`<br>Text: `text.inverse` | The single most important action on the screen. |
| **Secondary** | Medium Priority | Bg: `bg.surface` (or transparent)<br>Border: `border.default`<br>Text: `text.primary` | Standard actions, "Cancel" buttons, form options. |
| **Destructive** | Warning/Danger | Bg: `action.destructive`<br>Text: `text.inverse` | Irreversible data removal. Destructive buttons must never be the default focused action on initial render. |
| **Ghost/Utility** | Low Priority | Bg: Transparent<br>Text: `text.secondary` | Toolbar icons, table row actions. Ghost or Utility buttons may reduce visual emphasis, but must remain discoverable via keyboard focus and must not rely solely on hover for visibility. |

## 4. States
- **Default**: Base appearance.
- **Hover**: Visual feedback indicating interactivity.
  - Primary: `action.primaryHover`
  - Secondary: `bg.subtle` or `border.strong`
- **Active (Pressed)**: Visual feedback confirming input.
  - Primary: `action.primaryActive`
- **Focus**: Essential for keyboard navigation. MUST show a visible ring using `border.focus` with an offset.
- **Disabled**: Non-interactive.
  - Opacity: `opacity.disabled`
  - Pointer events: `none`
  - Cursor: `not-allowed`
- **Loading**: Replaces content with a spinner or indicator. MUST preserve button width and height to prevent layout shift. Loading state must block additional user input but must not use the Disabled visual style, to avoid implying permanent inaction.

## 5. Accessibility Contract
- **Role**: Must use `<button>` tag or `role="button"` (if strictly necessary).
- **Keyboard**: Focusable via `Tab`. Activates via `Enter` or `Space`.
- **Labels**: Icon-only buttons MUST have `aria-label` or `aria-labelledby`.
- **States**:
  - `disabled` attribute or `aria-disabled="true"` for disabled state.
  - `aria-busy="true"` for loading state.
  - `aria-pressed` for toggle buttons.
- **Contrast**: `text.inverse` on `action.primary` and `action.destructive` must meet WCAG AA.

## 6. Token Consumption Rules
- **Backgrounds**:
  - Primary: `action.primary`
  - Destructive: `action.destructive`
  - Secondary: `bg.surface` or `bg.page` (depending on placement)
- **Borders**:
  - Secondary: `border.default` (Light), `border.strong` (Dark target).
- **Text**:
  - Filled buttons: `text.inverse`
  - Outline/Ghost: `text.primary` or `text.secondary`
  - Icons: Inherit text color.

## 7. Density & Sizing Rules
Any pixel values mentioned are illustrative only, and implementations must rely exclusively on spacing tokens.

- **Sizing**:
  - **Large**: `spacing.lg` height (e.g. 40px+), `spacing.lg` horizontal padding.
  - **Default**: `spacing.xl` height (e.g. 32-36px), `spacing.md` horizontal padding.
  - **Small/Dense**: `spacing.xl` height (e.g. 24-28px), `spacing.sm` horizontal padding.
  - **Icon Only**: Square aspect ratio based on height.
- **Radius**: `radius.md` (Standard) or `radius.pill` (context specific).

## 8. Composition & Extensibility
- **Icons**: Supports Leading and Trailing icons. Icons should be sized relative to the text size (e.g., 1em or fixed to 16px/20px).
- **Full Width**: Prop to allow button to expand to container width (`width: 100%`).
- **Group**: Buttons can be grouped (button group), collapsing borders between them.
