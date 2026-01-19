# Form Controls Component Blueprint

---

# 1. Text Input

## 1. Purpose
To allow users to enter free-form short text data.

## 2. Usage Guidelines
### When to use
- Capturing names, identifiers, query strings, or single-line data.
- When the expected input length is predictable and short.
### When NOT to use
- Long-form content (use Textarea).
- Selecting from a predefined list (use Select).
- Date selection (use Date Picker).

## 3. Variants
- **Standard**: The default input style for most forms.
- **Search**: Includes a leading search icon, often with rounded pill corners.
- **Monospace**: For code snippets, API keys, or IDs.

## 4. States
- **Default**: `bg.surface` with `border.default`.
- **Focus**: `border.focus` (2px ring).
- **Hover**: `border.strong`; background should generally remain stable to avoid visual noise.
- **Error**: `status.error` border. Validation message displayed inline.
- **Disabled**: `bg.subtle`, `text.disabled`, no interaction. Relies on opacity (`opacity.disabled`) and stable borders, not a specific disabled border color.
- **Read-only**: `bg.subtle`, `text.primary`, text selectable but not editable. No border focus.

## 5. Accessibility Contract
- **Labeling**: Must have a visible `<label>` linked via `for`/`id` or `aria-labelledby`.
- **Required**: Required fields must be indicated accessibly using `required` or `aria-required="true"`, and must not rely on color alone (e.g., use an asterisk or text).
- **Attributes**: `aria-invalid="true"` on error. `aria-disabled="true"` on disabled.
- **Keyboard**: Full accessibility; standard OS text manipulation support.

## 6. Token Consumption Rules
- **Background**: `bg.surface` (Default), `bg.subtle` (Disabled/Read-only).
- **Border**: `border.default` (Default), `border.focus` (Focus), `status.error` (Error).
- **Text**: `text.primary` (Input), `text.muted` (Placeholder).

## 7. Density & Layout Rules
- **Height**: Driven by density tokens (e.g. `spacing.xl` for default, `spacing.lg` for dense).
- **Padding**: `spacing.md` horizontal for comfortable reading.
- **Elevation**: Elevation tokens apply ONLY to floating panels (e.g. autocomplete), NOT to the input itself.

## 8. Composition & Extensibility
- **Adornments**: Support for Leading/Trailing icons or text prefixes/suffixes (e.g. currency).

---

# 2. Textarea

## 1. Purpose
To capture multi-line free-form text.

## 2. Usage Guidelines
### When to use
- Comments, descriptions, or addresses.
### When NOT to use
- Short data fields (use Input).
- Rich text editing (unless specifically enhanced).

## 3. Variants
- **Fixed Height**: Static vertical size.
- **Resizable**: User can drag to resizing (vertical only recommended).
- **Auto-growing**: Expands height based on content.

## 4. States
- Inherits all states from Text Input (Default, Focus, Hover, Error, Disabled, Read-only).
- **Refinement**: Error state uses `status.error`. Disabled state relies on `opacity.disabled`.
- **Resize Handle**: Visible indicator if resizable.

## 5. Accessibility Contract
- Inherits all contracts from Text Input (Labeling, Required, Attributes, Keyboard).
- **Scroll**: Ensure keyboard accessibility for scrolling overflow content.

## 6. Token Consumption Rules
- Inherits all token rules from Text Input.

## 7. Density & Layout Rules
- **Min Height**: Minimum `spacing.4xl` to encourage multi-line entry.
- **Padding**: Same as Text Input, possibly with extra top padding for optical alignment.

## 8. Composition & Extensibility
- **Character Count**: Optional indicator for max-length constraints.

---

# 3. Select / Dropdown

## 1. Purpose
To allow selection of one item from a predefined list.

## 2. Usage Guidelines
### When to use
- Selecting 1 option from 5-15 choices.
- When space is limited (vs Radio group).
### When NOT to use
- < 3 options (use Radio).
- > 15 options (use Autocomplete/Combobox).
- Multiple selection (use Multi-select or Checkbox group); this component does NOT support multi-select.

## 3. Variants
- **Native**: Uses browser OS select (mobile friendly).
- **Custom**: Styled listbox for consistent desktop rendering.

## 4. States
- Same as Text Input.
- **Open**: Listbox visible, z-indexed above content.

## 5. Accessibility Contract
- **Native**: Standard browser behavior.
- **Custom**: Must implement ARIA Listbox pattern (`role="combobox"`, `role="listbox"`, `aria-expanded`).
- **Required**: Must indicate required state accessibly.
- **Keyboard**: Up/Down arrows to navigate, Enter to select, Esc to close.

## 6. Token Consumption Rules
- **Trigger**: Same as Text Input.
- **Dropdown List**: `bg.elevated`, `border.subtle`. Elevation applies ONLY to this floating panel.
- **Option (Hover/Focus)**: `bg.subtle` is preferred. Avoid `action.primary` unless strictly necessary for selected state contrast.

## 7. Density & Layout Rules
- Height matches Text Input for alignment in rows.

## 8. Composition & Extensibility
- **Grouping**: Support `<optgroup>` or separator dividers.

---

# 4. Checkbox

## 1. Purpose
To select one or more independent options.

## 2. Usage Guidelines
### When to use
- Binary "Yes/No" choices.
- Selecting multiple items from a list (e.g. data table rows).
### When NOT to use
- Mutually exclusive choices (use Radio).
- Immediate activation settings (use Switch).

## 3. Variants
- **Single**: Standalone boolean.
- **Group**: Set of related options.
- **Indeterminate**: "Mixed" state (some children selected).

## 4. States
- **Unchecked**: Empty box, `border.default`.
- **Checked**: Filled, `action.primary` background, `text.inverse` checkmark.
- **Indeterminate**: Filled, `action.primary`, dash icon.
- **Focus**: Visible ring disjoint from border.
- **Disabled**: Relies on `opacity.disabled` and non-interactivity (not focusable, not toggleable). Do not apply special disabled borders.

## 5. Accessibility Contract
- **Role**: `input type="checkbox"`.
- **Label**: Clickable label text linked to input.
- **Required**: Must indicate required state accessibly.
- **Indeterminate**: Must set `aria-checked="mixed"` or DOM `indeterminate` property.

## 6. Token Consumption Rules
- **Box**: `bg.surface` (Unchecked), `action.primary` (Checked).
- **Checkmark**: `text.inverse`.
- **Border**: `border.default` (Unchecked), `action.primary` (Checked).

## 7. Density & Layout Rules
- **Size**: Typically `spacing.lg` (16px visual box).
- **Touch Target**: Minimum 24px/32px hit area even if visual mark is smaller.

## 8. Composition & Extensibility
- **Description**: Helper text below the label.

---

# 5. Radio

## 1. Purpose
To select exactly one option from a set.

## 2. Usage Guidelines
### When to use
- Mutually exclusive options (> 2 options).
- When all options need to be visible (vs Select).
### When NOT to use
- Multiple selection.
- Binary On/Off (use Switch or Checkbox).

## 3. Variants
- **Default**: Circular indicator.
- **Card**: Box-based selection for rich content choices.

## 4. States
- **Unselected**: Empty circle, `border.default`.
- **Selected**: Filled circle (or dot), `action.primary`. Only one item selected at a time.
- **Focus**: Ring around the indicator.

## 5. Accessibility Contract
- **Role**: `input type="radio"`. Group needs `role="radiogroup"` with `aria-labelledby`.
- **Required**: Must indicate required state accessibly.
- **Selection**: Must not rely on color alone; use a filled dot or shape change to indicate selection.
- **Keyboard**: Arrow keys to navigate within the group (Roving tabindex).

## 6. Token Consumption Rules
- Similar to Checkbox but uses radius tokens for circular shape (`radius.pill`).

## 7. Density & Layout Rules
- **Stacking**: Vertical by default for readability; Horizontal only if short labels.

## 8. Composition & Extensibility
- **Card Radio**: Uses `surface.card` styles, adding `border.focus` or `border.strong` when selected.

---

# 6. Switch / Toggle

## 1. Purpose
To toggle a single setting on or off, usually implementing an immediate effect.

## 2. Usage Guidelines
### When to use
- Activating a system feature (e.g., "Dark Mode", "Notifications").
- Binary states that take effect immediately, not on form submission.
### When NOT to use
- Form data submission (use Checkbox).
- Choosing between opposing values like "High/Low" (use Radio or Segmented Control).
- Destructive or irreversible actions without confirmation.

## 3. Variants
- **Default**: Pill shape with sliding knob.
- **With Icon**: Icon inside the knob or track for status indication.

## 4. States
- **Off**: `bg.subtle` or `border.strong`, knob left.
- **On**: `action.primary` or `status.primary` (if separate status needed), knob right.
- **Focus**: Focus ring around the entire control (track), not just the knob.

## 5. Accessibility Contract
- **Role**: `button role="switch"` or `input type="checkbox" role="switch"`.
- **State**: `aria-checked="true/false"`.
- **Label**: Must be clearly labeled "On/Off" or via associated text.

## 6. Token Consumption Rules
- **Track**: `bg.subtle` (Off), `action.primary` (On).
- **Knob**: `bg.surface` (White/Light), elevated with shadow.

## 7. Density & Layout Rules
- **Size**: Standard toggle width ~`spacing.2xl`, height ~`spacing.lg`.

## 8. Composition & Extensibility
- **Labels**: Usually placed leading (left) or trailing (right).
