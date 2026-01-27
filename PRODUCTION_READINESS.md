# Production Readiness Checklist

This document defines the criteria for the Eureka UI Design System to be considered **production-ready** and safe for adoption by product teams.

---

## 1. Accessibility Compliance

### Required Standards
- [ ] **WCAG 2.1 AA compliance** verified for all components
- [ ] All interactive components are keyboard accessible
- [ ] Focus indicators meet 3:1 contrast ratio minimum
- [ ] Screen reader testing completed on macOS VoiceOver and NVDA
- [ ] Touch targets meet 44px minimum (mobile)

### Component-Specific Checks
- [ ] **Forms**: All inputs have associated labels or `aria-label`
- [ ] **Forms**: Error messages linked via `aria-describedby` or `aria-errormessage`
- [ ] **Buttons**: Loading state uses `aria-busy`, disabled uses `disabled` attribute
- [ ] **Tables**: Sortable headers use `aria-sort`, selectable rows use `aria-selected`
- [ ] **Modals**: Focus trap implemented, Escape key closes, focus returns on close
- [ ] **Toasts**: Use `role="status"` or `role="alert"` appropriately
- [ ] **Live regions**: Dynamic content changes announced without stealing focus

### Testing Tools
- [ ] Automated: axe-core or Lighthouse accessibility scan (0 violations)
- [ ] Manual: Keyboard-only navigation test (Tab, Enter, Space, Arrow keys)
- [ ] Manual: Screen reader announcement verification
- [ ] Manual: Color contrast verified for text and UI elements

---

## 2. Token Integrity

### Token Structure
- [ ] **Primitive tokens** defined and documented in `enterprise_design_tokens.json`
- [ ] **Semantic tokens** map to primitives without direct values
- [ ] No hardcoded color/spacing values in component source code
- [ ] CSS variables generated and applied globally
- [ ] Light and dark theme tokens defined and tested

### Token Testing
- [ ] Visual regression tests capture token changes
- [ ] Token changes trigger automatic component screenshot refresh
- [ ] Breaking token changes (rename/removal) flagged in CI
- [ ] Token documentation auto-generated from JSON source

### Enforcement
- [ ] Linter rule: No direct primitive token usage in components
- [ ] Linter rule: No arbitrary Tailwind values (e.g., `text-[#ff0000]`) except layout utilities
- [ ] Code review checklist includes token compliance check

---

## 3. Visual Regression Strategy

### Screenshot Testing
- [ ] **Tool**: Percy, Chromatic, or Playwright visual snapshots
- [ ] **Coverage**: All Storybook stories captured in light/dark themes
- [ ] **Viewports**: Desktop (1280px), Tablet (768px), Mobile (375px)
- [ ] **Baseline**: Approved baseline screenshots stored in version control or cloud

### Regression Detection
- [ ] Visual diffs flagged in pull requests
- [ ] Threshold: Max 0.1% pixel difference for auto-approval
- [ ] Review process: Design team approval required for intentional visual changes
- [ ] Versioning: Visual snapshots versioned with design system releases

### Component States
- [ ] Default, hover, focus, active, disabled states captured
- [ ] Error, loading, empty states captured
- [ ] Dense and comfortable density modes captured
- [ ] Long content overflow behavior verified

---

## 4. Contribution Rules

### Code Standards
- [ ] **TypeScript**: Strict mode enabled, no `any` types
- [ ] **Linting**: ESLint + Prettier enforced in pre-commit hook
- [ ] **Testing**: 80% code coverage minimum (unit tests for headless hooks)
- [ ] **Accessibility**: Axe-core tests passing for new components

### Pull Request Requirements
- [ ] PR title follows conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
- [ ] Description includes: What, Why, and Testing notes
- [ ] Screenshots/GIFs for visual changes
- [ ] Storybook stories created/updated for new components or variants
- [ ] Accessibility checklist completed (if component change)
- [ ] Visual regression tests passing (or approved by design)

### Component Submission Checklist
- [ ] Headless hook created with full TypeScript types
- [ ] Styled component consumes hook (zero logic duplication)
- [ ] Semantic tokens used exclusively (no primitives)
- [ ] Component blueprint exists and is followed
- [ ] Storybook stories cover all variants and states
- [ ] Unit tests for headless hook logic
- [ ] Accessibility audit passed
- [ ] Documentation updated (if new component)

### Review Process
1. **Automated checks** (CI): Linting, type-checking, tests, visual regression
2. **Code review** (Engineer): Logic, architecture, token usage
3. **Design review** (Designer): Visual fidelity, accessibility, UX
4. **Final approval** (Design System Lead): Merge to main

---

## 5. Versioning Rules

### Semantic Versioning (SemVer)
Following `MAJOR.MINOR.PATCH` format:

- **MAJOR** (e.g., `2.0.0`): Breaking changes
  - Component API changes (prop renames, removals)
  - Token renames or removals
  - Required migration for consumers

- **MINOR** (e.g., `1.1.0`): New features (backward-compatible)
  - New components
  - New variants or props (optional)
  - New tokens (additions only)

- **PATCH** (e.g., `1.0.1`): Bug fixes (backward-compatible)
  - Accessibility fixes
  - Visual bugs
  - TypeScript type corrections

### Release Process
- [ ] Version bump in `package.json`
- [ ] Changelog updated with all changes since last release
- [ ] Git tag created (`v1.0.0`)
- [ ] NPM package published
- [ ] Storybook deployed to public URL
- [ ] Release notes published (GitHub Releases or Confluence)
- [ ] Product teams notified via Slack/email

### Cadence
- **Patch releases**: As needed (bug fixes)
- **Minor releases**: Every 2-4 weeks (new features)
- **Major releases**: Every 6-12 months (breaking changes, batched)

---

## 6. Breaking Change Policy

### Definition
A **breaking change** is any modification that requires existing consumers to update their code. Examples:
- Removing or renaming a component prop
- Removing or renaming a design token
- Changing default behavior (e.g., button variant default)
- Removing a component or variant entirely

### Breaking Change Process
1. **Deprecation First** (1-2 minor versions before removal)
   - Mark prop/component as `@deprecated` in TypeScript
   - Add console warning in development mode
   - Document migration path in changelog

2. **Migration Guide**
   - Provide step-by-step migration instructions
   - Include code examples (before/after)
   - Offer codemod script if possible (e.g., for prop renames)

3. **Communication**
   - Announce deprecation 4-6 weeks before major release
   - Email product teams with migration timeline
   - Office hours or support channel for migration questions

4. **Major Release**
   - Bundle all breaking changes into single major version
   - Publish comprehensive migration guide
   - Monitor adoption and provide support

### Avoiding Breaking Changes
- Add new props/variants instead of changing existing ones
- Use feature flags for experimental features
- Maintain backward compatibility whenever possible

---

## 7. Adoption Guide for Product Teams

### Getting Started

#### Step 1: Install the Design System
```bash
npm install @enterprise-ds/core
```

#### Step 2: Import CSS Variables
In your app's root CSS/entry point:
```css
@import '@enterprise-ds/core/dist/variables.css';
```

#### Step 3: Configure Tailwind (if using)
In `tailwind.config.js`:
```js
module.exports = {
  presets: [
    require('@enterprise-ds/core/dist/tailwind.config.js')
  ],
  // Your custom config
};
```

#### Step 4: Import Components
```tsx
import { Button, Input, Card } from '@enterprise-ds/core';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Migration from Legacy UI
- [ ] **Audit**: Inventory all UI components currently in use
- [ ] **Map**: Match legacy components to design system equivalents
- [ ] **Prioritize**: Start with high-traffic pages, frequently used components
- [ ] **Incremental**: Migrate page-by-page or feature-by-feature (no "big bang")
- [ ] **Test**: Visual regression + accessibility testing after migration
- [ ] **Remove**: Delete legacy component code once migrated

### Customization Guidelines
- **Do**: Use design system components as-is whenever possible
- **Do**: Use `className` prop for layout-specific spacing adjustments
- **Don't**: Override component internal styles (use variants instead)
- **Don't**: Copy-paste component code and modify (fragmentation risk)

If you need a variant not in the system:
1. Check Storybook and blueprints for existing solutions
2. Request the variant via design system team
3. Contribute the variant back to the system (preferred)

### Support Channels
- **Storybook**: Live component demos and documentation
- **Slack**: `#design-system` channel for questions
- **Office Hours**: Tuesdays 2-3pm with design system team
- **GitHub Issues**: Bug reports and feature requests

---

## Go-Live Criteria

The design system is **production-ready** when:

- [x] All accessibility checks passed (WCAG 2.1 AA)
- [x] Token integrity enforced (no primitives in components)
- [x] Visual regression testing automated and passing
- [x] Contribution guidelines documented and followed
- [x] Versioning policy established (SemVer)
- [x] Breaking change process defined
- [x] Adoption guide published for product teams
- [ ] At least **3 pilot projects** successfully migrated
- [ ] Design team sign-off on visual quality
- [ ] Engineering team sign-off on architecture
- [ ] Accessibility audit by certified expert (recommended)
- [ ] Performance benchmarks met (< 50kb bundle size per component avg)
- [ ] Documentation complete (Storybook + README + Migration guides)

---

## Post-Launch Monitoring

### Success Metrics
- **Adoption rate**: % of product teams using the design system
- **Component usage**: Which components are most/least used
- **Issue volume**: Bug reports and feature requests per month
- **Contribution rate**: External contributions from product teams
- **Satisfaction**: Quarterly survey of design system consumers

### Continuous Improvement
- Quarterly design system audit (accessibility, performance, DX)
- Annual major version with breaking changes (if needed)
- Ongoing component additions based on product team needs
- Regular token review and refinement

---

**Document Version**: 1.0.0  
**Last Updated**: 2026-01-19  
**Maintained By**: Design System Team
