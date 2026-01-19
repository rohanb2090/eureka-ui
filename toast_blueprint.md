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

## 3. Notification Types & Severity
Severity is semantic, not visual. Visual presentation is derived from semantic tokens.

- **Info**: Neutral information or status updates.
- **Success**: Confirmation of successful completion.
- **Warning**: Potential issues requiring awareness, non-blocking.
- **Error**: Non-blocking failures or background errors.

## 4. Anatomy
- **Container**: Elevated surface with background and border.
- **Icon** (Optional): Semantic icon indicating severity. Must be `aria-hidden`.
- **Message**: 1-2 lines maximum. Primary content.
- **Action** (Optional): Single action button or link. Maximum ONE action.
- **Dismiss** (Optional): 'X' icon to close immediately.

**Constraints**:
- Maximum 1 action per toast.
- Maximum 2 text lines.
- No stacked buttons.
- No complex layouts.

## 5. States & Lifecycle
- **Auto-dismiss Timing**:
  - Info: 3-4 seconds
  - Success: 3-4 seconds
  - Warning: 5-6 seconds
  - Error: 6-8 seconds (or persist with manual dismiss)
- **Pause on Interaction**: Timer pauses when toast receives hover or keyboard focus.
- **Stacking**: Maximum 3 toasts visible simultaneously. Older toasts auto-dismiss when limit exceeded.
- **Queueing**: New toasts enter queue if stack is full.
- **Deduplication**: Identical messages within 2 seconds are suppressed.

## 6. Accessibility Contract
- **Role**:
  - `role="status"` for info and success (polite announcements).
  - `role="alert"` for warning and error (assertive announcements).
- **Live Region**: Container must be `aria-live="polite"` or `aria-live="assertive"` depending on severity.
- **Focus**: Toasts must NOT steal focus from current interaction.
- **Dismiss**: Keyboard accessible via Tab + Enter/Space or Escape key.
- **Announcements**: Message must be announced once by screen readers. Re-announcements only if content changes.

## 7. Token Consumption Rules
Toasts consume existing semantic tokens exclusively.

- **Background**: `bg.elevated`
- **Text**: `text.primary`
- **Border**: `border.default` or `border.subtle`
- **Icon/Accent**: Derived from `status.info`, `status.success`, `status.warning`, `status.error`
- **Elevation**: `elevation.md`
- **Action Button**: Follow Button blueprint semantic rules (typically `variant="ghost"` or `variant="link"`)

Do NOT introduce new tokens.

## 8. Layout & Density Rules
- **Placement**:
  - Desktop: Bottom-right or top-right corner, 16-24px from viewport edge.
  - Mobile: Bottom of screen, full width with horizontal padding.
- **Width**:
  - Desktop: 320-400px fixed width.
  - Mobile: Responsive with min padding.
- **Z-index**: Below Modals, above all page content. Must not obscure critical UI.
- **Spacing**: `spacing.md` between stacked toasts.

## 9. Interaction Rules
- **Undo Behavior**:
  - Undo actions must pause or extend auto-dismiss timer.
  - Undo must be the only action in the toast.
  - Undo must complete within the toast lifetime or persist until user acts.
- **Retry Constraints**:
  - Retry actions are discouraged in toasts.
  - Prefer directing users to Inline Alert or dedicated error UI for retry flows.
- **Dismissal**:
  - Manual dismiss via 'X' icon.
  - Auto-dismiss based on severity timing.
  - Dismiss all via Escape key if toasts have focus context.

## 10. Composition & Extensibility
- **Relationship to Inline Alerts**: Toasts are transient; Inline Alerts are persistent. Do NOT use both for the same message.
- **Relationship to Modals**: Toasts never replace blocking confirmations. Use Modal for critical decisions.
- **Conceptual API Shape**:
  - `show(message, type, options)`
  - `dismiss(id)`
  - `dismissAll()`
  - Options: `duration`, `action`, `onAction`, `onDismiss`, `persistent`
- **Progressive Disclosure**: Complex error details belong in Inline Alerts or dedicated error pages, not toasts.
