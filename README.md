# Eureka UI

[![npm version](https://img.shields.io/npm/v/eureka-ui.svg)](https://www.npmjs.com/package/eureka-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

Open-source headless-first React component library with semantic tokens and full accessibility support.

[📚 **Storybook**](https://[username].github.io/eureka-ui/) | [🐛 **Issues**](https://github.com/[username]/eureka-ui/issues) | [💬 **Discussions**](https://github.com/[username]/eureka-ui/discussions)

---

## Features

- **Headless-first architecture** - Behavior separated from styling
- **Semantic token system** - CSS variables as single source of truth
- **Fully accessible** - WCAG 2.1 AA compliant
- **Tree-shakeable** - Import only what you need
- **TypeScript** - Full type safety
- **Density modes** - Compact, Default, Comfortable
- **Dark mode** - Built-in theme support
- **Zero config** - Works out of the box

---

## Installation

```bash
npm install eureka-ui
```

## Quick Start

```tsx
import { Button, Input, Card } from 'eureka-ui';

function App() {
  return (
    <Card variant="elevated" padding="lg">
      <Input placeholder="Enter your name" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Import Styles

In your app entry point:

```tsx
import 'eureka-ui/dist/style.css';
```

---

## Components

**Implemented:**
- Button (primary, secondary, destructive, ghost)
- Input (text, email, password, etc.)
- Checkbox (with indeterminate support)
- Radio + RadioGroup
- Select
- Table (sortable, selectable)
- Pagination (page-based, cursor-based)
- Toast (with positioning)
- InlineAlert (info, success, warning, error)
- EmptyState
- Skeleton (text, circular, rectangular)
- Surface/Card (5 elevation variants)

**Roadmap:**
- Modal/Dialog
- Dropdown Menu
- Tabs
- Accordion
- Tooltip
- Badge
- Avatar

---

## Theme Customization

Override CSS variables in your app:

```css
:root {
  --action-primary: #your-brand-color;
  --radius-md: 8px;
}
```

### Dark Mode

```tsx
<div data-theme="dark">
  <App />
</div>
```

### Density

```tsx
<div data-density="compact">
  <App />
</div>
```

---

## Development

```bash
git clone https://github.com/[username]/eureka-ui.git
cd eureka-ui
npm install
npm run storybook
```

**Commands:**
- `npm run dev` - Vite dev server
- `npm run storybook` - Storybook on port 6006
- `npm run build` - Build library
- `npm run type-check` - TypeScript validation
- `npm run lint` - ESLint check

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

---

## License

MIT © Eureka UI Contributors

