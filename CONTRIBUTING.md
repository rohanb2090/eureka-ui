# Contributing to Eureka UI

## Code of Conduct

Respectful collaboration. No discrimination.

## How to Contribute

### Reporting Issues
- Use GitHub Issues
- Provide reproduction steps
- Include environment details

### Component Contributions

**Requirements:**
1. Headless hook in `src/headless/[Component]/`
2. Styled component in `src/components/[Component]/`
3. Storybook stories with all variants
4. TypeScript types (no `any`)
5. Accessibility compliance (WCAG 2.1 AA)
6. Only semantic CSS variables (no primitives)

**Pull Request Process:**
1. Fork the repository
2. Create feature branch (`feat/component-name`)
3. Follow existing patterns (see Button component)
4. Add tests for headless logic
5. Update Storybook stories
6. Run `npm run type-check` and `npm run lint`
7. Submit PR with description, screenshots, accessibility checklist

### Commit Convention
```
feat: add Card component
fix: resolve Button focus ring issue
docs: update README installation
chore: upgrade dependencies
```

### Architecture Rules
- **Headless layer**: All logic, keyboard handling, ARIA
- **Styled layer**: Zero logic, only Tailwind + semantic tokens
- **No inline styles** unless strictly necessary
- **No external UI libraries**
- **Tree-shakeable exports**

### Review Process
1. Automated checks (CI/CD)
2. Code review by maintainer
3. Accessibility review
4. Merge to main

## Development Setup

```bash
git clone https://github.com/[username]/eureka-ui.git
cd eureka-ui
npm install
npm run storybook
```

## Questions?

Open a GitHub Discussion or join our community.
