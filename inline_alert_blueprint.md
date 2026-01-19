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
- **Blocking Critical Errors**: Use Modal or dedicated Error Page.
- **Transient Updates**: Use Toast/Snackbar (e.g., "Copied to clipboard").
- **Marketing/Upgrades**: Use Banner or dedicated Callout component.
- **Field-level Input Errors**: Errors should be shown adjacent to the specific input field, not duplicated in an inline alert.

## 3. Alert Types & Severity
Severity is semantic, not visual. Visual presentation is derived from semantic tokens.

- **Info**: Neutral information.
- **Success**: Confirmation of completion.
- **Warning**: Potential issues, non-blocking.
- **Error**: Failure or critical issue requiring attention.

## 4. Anatomy
- **Container**: Background and border derived from semantic status tokens.
- **Icon**: Semantic icon indicating severity (Info, Check, Alert, Ban). Must be `aria-hidden`.
- **Title** (Optional): Bold summary for scanning.
- **Description**: Detailed explanation and next steps.
- **Action** (Optional): Link or small button to resolve the issue. Limit to ONE primary action.
- **Dismiss** (Optional): 'X' icon to remove the alert.

**Dismissibility Constraints**:
- Error alerts and critical warnings are NOT dismissible by default.
- Dismiss is permitted primarily for Info alerts, Success alerts, and non-critical warnings.
- Dismissal must not be used to hide unresolved errors.

## 5. States
- **Static**: Typical state, part of the document flow.
- **Dismissible**: User can close the alert.
- **Collapsed/Expanded**: For lengthy error logs (optional).

## 6. Accessibility Contract
- **Role**:
  - `role="alert"`: For errors/warnings that appear dynamically and require immediate attention.
  - `role="status"`: For info/success messages or static alerts present on load.
  - Roles must reflect urgency and must not be escalated unnecessarily.
- **Focus**: Should NOT auto-focus unless it represents a critical form validation failure on submit (and even then, prefer focusing the first invalid input).
- **Icons**: Must be `aria-hidden`.
- **Announcements**: Dynamic alerts should not be repeatedly re-announced on re-render unless the message content changes.
- **Contrast**: Text must meet WCAG AA against the background color.

## 7. Token Consumption Rules
Inline Alerts consume existing `status.*` semantic tokens. Subtle backgrounds, borders, and icon colors are derived systematically from the base semantic status token.

- **Background**: Derived from `status.info`, `status.success`, `status.warning`, `status.error`.
- **Border**: Derived from semantic status tokens (often a left accent strip).
- **Icon**: Derived from semantic status tokens.
- **Text**: `text.primary` for message, bold weight for title.
- **Action**: Link color follows standard `action.primary` or contextual status emphasis.

## 8. Layout & Density Rules
- **Density**:
  - **Compact**: Icon + Text inline. 32px-40px height.
  - **Standard**: Icon + Title + multiline Description.
- **Spacing**:
  - `spacing.md` padding.
  - `spacing.sm` gap between icon and text.

## 9. Interaction Rules
- **Dismiss**: Removes the element from the DOM. Should trigger an announcement if using a screen reader.
- **Actions**: Links should be understated. Buttons inside alerts should be `variant="ghost"` or `variant="link"` to reduce visual noise.

## 10. Composition & Extensibility
- **In Forms**: Placed at the top for summary errors. Do NOT duplicate field-level errors.
- **In Tables**: Replaces a row or appears above the toolbar.
- **In Cards**: Placed below the header or above content.
