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
- Critical system failures (use Toast, Banner, or Error Page). Empty States are only for recoverable, non-blocking, context-specific issues.
- Authentication failures or system outages.
- Success confirmations (use Toast or Banner).

## 3. Empty State Types
- **No Data (Initial)**: Encourages creation. "No projects found." Action: "Create Project".
- **No Data (System)**: Informational only. "No logs available." Action: "Refresh" (optional).
- **Filtered / Search No Results**: Explains why items are hidden. "No items match 'xyz'." Action: "Clear Filters".
- **Access / Permission Denied**: "You don't have permission to view these records." Action: "Request Access" (if relevant).
- **Module Error**: "Unable to load widget data." Action: "Retry".

## 4. Anatomy
- **Illustration/Icon** (Optional): Neutral visual anchor.
- **Title**: Short, direct statement of the status (e.g., "No users found").
- **Description** (Optional): 1-2 sentences explaining context or next steps.
- **Primary Action** (Optional): Single Button to resolve the state.
- **Secondary Action** (Optional): Low-emphasis Link to documentation or support.

## 5. States
- **Display**: Standard centralized layout.
- **Interactive**: Allows action click (Create, Clear, Retry). Empty states must not introduce complex workflows.

## 6. Accessibility Contract
- **Focus**: Container should not auto-focus unless it replaces the entire page content. Empty states must not trap focus.
- **Heading**: Title must be a semantic heading (`h2`, `h3`, etc.) appropriate for the context structure.
- **Traversability**: Actions must be in the tab order.
- **Announcements**: When empty states appear dynamically (e.g., after filtering or deletion), the change should be announced via appropriate ARIA live regions without forcing focus changes.
- **Images**: Illustrations must have `alt=""` (decorative) unless they convey unique information not in the text.

## 7. Token Consumption Rules
- **Background**: Transparent (inherits parent surface).
- **Text**:
  - Title: `text.primary` or `text.secondary` depending on emphasis.
  - Description: `text.muted`.
  - Icon: `text.muted`. Reserve `text.disabled` strictly for disabled interactive elements.
- **Actions**: Follow Button semantic tokens (`action.primary`, `border.default`).

## 8. Layout & Density Rules
- **Action Hierarchy**: At most ONE primary action. Optional secondary actions must be low-emphasis links. Do NOT use multiple competing primary actions.
- **Alignment**: Center-aligned (horizontal and vertical) within the container.
- **Max Width**: Description text restricted to readable line length (~40-60ch).
- **Spacing**:
  - Icon to Title: `spacing.md` or `spacing.lg`.
  - Title to Description: `spacing.xs` or `spacing.sm`.
  - Description to Action: `spacing.xl` (clear separation).
- **Scaling**: Must work in small widgets (icon + text only) vs full page (larger illustration).

## 9. Interaction Rules
- **Clear Filters**: Should immediately reset the data view.
- **Create**: Opens modal or navigates to creation flow.
- **Retry**: Triggers data re-fetch.

## 10. Composition & Extensibility
- **Inside Tables**: Replaces `tbody` content, spanning all columns.
- **Inside Cards**: Centers within the card body.
- **Custom Content**: Slot for injecting custom components if standard actions suffice (e.g. specialized search suggestions).
