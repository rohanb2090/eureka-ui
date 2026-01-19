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
- **Error States**: Use Inline Alert or Toast for failures, not loading skeletons.
- **Background Sync**: Silent background operations should not show loading UI unless user-initiated.

## 3. Loading Types
- **Page Loading**: Full page replacement during navigation. Preserve shell (nav, header).
- **Section / Panel Loading**: Card or dashboard widget data fetch.
- **Component Loading**: Table rows, form fields, or chart data.
- **Inline / Micro-loading**: Button loading state, single table cell, dropdown options.

## 4. Skeleton Anatomy
Skeletons must mirror real content structure with shape fidelity.

- **Text Lines**: Rectangle placeholders matching text line heights and widths (varied, not uniform).
- **Avatars**: Circular placeholders for user images.
- **Charts**: Simplified geometric shapes representing chart containers.
- **Tables**: Header row (visible) + skeleton body rows matching column structure.
- **Cards**: Container with skeleton header, body text lines, optional footer.

**Strict Rule**: Generic gray blocks that do not map to content structure are prohibited. Skeleton hierarchy must reflect final content hierarchy.

## 5. States & Lifecycle
- **Initial Loading**: Skeleton appears immediately (< 100ms) on data request.
- **Progressive Data Reveal**: As data arrives, replace skeleton segments incrementally (e.g., table rows appear as they load).
- **Partial Loading**: Some sections show data while others remain in skeleton state.
- **Prolonged Loading**: After 8-10 seconds, consider showing a message or retry option (not in skeleton itself, use Inline Alert).
- **Timeout Handling**: If loading fails, transition to Empty State or Inline Alert, not persistent skeleton.

## 6. Accessibility Contract
- **ARIA**:
  - Container: `aria-busy="true"` while loading.
  - Skeleton elements: `aria-hidden="true"` (decorative only).
  - Live region: Announce completion via `aria-live="polite"` when data loads.
- **Screen Readers**: Skeletons are hidden. Loading status communicated via `aria-busy` and optional visually-hidden text.
- **Keyboard Navigation**: Focusable elements within loading sections must be disabled or skipped until data resolves.
- **Reduced Motion**: Skeleton animations (subtle pulse) must respect `prefers-reduced-motion`. No animation if user preference is reduce.

## 7. Token Consumption Rules
Loading states consume existing semantic tokens exclusively.

- **Background**: `bg.surface` (container), `bg.subtle` (skeleton fill).
- **Text Placeholders**: Derived from `bg.subtle` with subtle opacity variation.
- **Motion**: Minimal pulse animation using `opacity.disabled` range. Strictly limited.
- **Elevation**: Inherit from parent surface. No special elevation for skeletons.

**Prohibited**:
- New color tokens.
- Branded gradients or shimmer effects.
- Animated spinners that block reading or create visual noise.

## 8. Layout & Density Rules
Skeletons must preserve exact layout dimensions to prevent content reflow.

- **Width & Height**: Skeleton elements must match final content dimensions exactly.
- **No Reflow**: When data resolves, content must occupy the same space as skeleton. No layout shift.
- **Density Variants**:
  - **Compact**: Match compact table row height, reduced padding.
  - **Comfortable**: Match standard spacing.
- **Responsive**: Skeletons must adapt to viewport changes identically to final content.

## 9. Interaction Rules
- **Disable Interactions Safely**: Interactive elements (buttons, links) within loading sections:
  - Must be visually disabled.
  - Must not be focusable.
  - Clearly distinct from permanent disabled state.
- **Buttons**: Loading buttons show inline spinner + disabled state, distinct from disabled (no spinner).
- **Tables**: Header remains visible and functional (e.g., sorting disabled but header structure intact).
- **Forms**: Inputs must be disabled during section-level loading, not just visually muted.

## 10. Composition & Extensibility
- **Relationship to Empty States**:
  - Loading transitions to Empty State if data returns zero results.
  - Loading must never transition to Empty State on error (use Inline Alert).
- **Relationship to Inline Alerts**:
  - Loading states do not communicate errors.
  - If loading fails, replace skeleton with Inline Alert (Error type).
- **Mixed Content Dashboards**:
  - Multiple sections may load independently.
  - Loaded content must be fully interactive while adjacent sections remain in loading state.
  - No global page blocking during partial loading.
- **Conceptual API Shape**:
  - `isLoading` boolean state.
  - `loadingType`: "skeleton" | "spinner" | "inline".
  - `preserveDimensions`: enforce layout stability.
