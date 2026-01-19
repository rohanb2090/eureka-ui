# Component Architecture

## Architecture Contract

This design system enforces strict separation of concerns across three layers:

1. **Primitive Layer**: Design tokens and CSS utilities
2. **Headless Layer**: Behavior, accessibility, state management
3. **Styled Layer**: Visual presentation via Tailwind + semantic CSS variables

**Non-Negotiable Rules:**
- Headless components contain ALL logic, keyboard handling, ARIA, state, and events
- Styled components contain ZERO logic and consume semantic CSS variables ONLY
- Tokens flow exclusively via CSS variables, never directly imported
- No component may mix headless and styled responsibilities
- Props are strictly separated: behavioral props vs visual props

---

## Folder Structure

```
src/
├── tokens/
│   ├── primitives/
│   │   └── design-tokens.json
│   ├── semantic/
│   │   └── semantic-tokens.json
│   └── generated/
│       ├── variables.css
│       └── tailwind.config.js
│
├── headless/
│   ├── Button/
│   │   ├── useButton.ts              # Hook: logic, a11y, state
│   │   ├── Button.types.ts           # TypeScript interfaces
│   │   └── index.ts
│   ├── Input/
│   │   ├── useInput.ts
│   │   ├── Input.types.ts
│   │   └── index.ts
│   └── ...
│
├── components/
│   ├── Button/
│   │   ├── Button.tsx                # Styled component (Tailwind + CSS vars)
│   │   ├── Button.stories.tsx
│   │   └── index.ts
│   ├── Input/
│   │   ├── Input.tsx
│   │   ├── Input.stories.tsx
│   │   └── index.ts
│   └── ...
│
└── utils/
    ├── cn.ts                         # Tailwind merge utility
    └── compose.ts                    # Event composition helpers
```

---

## Naming Conventions

### Files
- **Headless hooks**: `use{ComponentName}.ts` (e.g., `useButton.ts`)
- **Styled components**: `{ComponentName}.tsx` (e.g., `Button.tsx`)
- **Types**: `{ComponentName}.types.ts`
- **Stories**: `{ComponentName}.stories.tsx`

### CSS Variables
- **Semantic tokens**: `--{category}-{name}` (e.g., `--action-primary`, `--bg-surface`)
- **Component-scoped**: `--{component}-{property}` (e.g., `--button-height`)

### Component Exports
- **Headless**: Export hook and types from `headless/{Component}/`
- **Styled**: Export component from `components/{Component}/`
- **Never** re-export headless from styled component files

---

## Props Separation Rules

### Behavioral Props (Headless Layer)
These props control logic, state, and accessibility:

```typescript
// In useButton.ts types
interface UseButtonProps {
  // State
  isDisabled?: boolean;
  isLoading?: boolean;
  isPressed?: boolean;
  
  // Events
  onClick?: (e: MouseEvent) => void;
  onPress?: () => void;
  onPressStart?: () => void;
  onPressEnd?: () => void;
  
  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;
  role?: string;
  
  // Behavior
  type?: 'button' | 'submit' | 'reset';
  autoFocus?: boolean;
}
```

### Visual Props (Styled Layer)
These props control presentation only:

```typescript
// In Button.tsx
interface ButtonProps extends UseButtonProps {
  // Visual variants
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  
  // Layout
  fullWidth?: boolean;
  
  // Content
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  
  // Styling escape hatch (Tailwind classes only)
  className?: string;
}
```

### Enforcement Pattern

**Headless Hook:**
```typescript
// headless/Button/useButton.ts
export function useButton(props: UseButtonProps) {
  // Returns behavioral primitives
  return {
    buttonProps: {
      role: 'button',
      disabled: isDisabled,
      'aria-busy': isLoading,
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      tabIndex: isDisabled ? -1 : 0,
    },
    state: { isPressed, isHovered },
  };
}
```

**Styled Component:**
```typescript
// components/Button/Button.tsx
export function Button({ variant = 'primary', size = 'md', ...props }: ButtonProps) {
  const { buttonProps } = useButton(props);
  
  return (
    <button
      {...buttonProps}
      className={cn(
        // Base styles via CSS variables
        'bg-[var(--button-bg)] text-[var(--button-text)]',
        // Variant classes
        variantClasses[variant],
        sizeClasses[size],
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
```

---

## Token Flow Contract

1. **Primitives** → JSON file (single source of truth)
2. **Semantic Tokens** → Mapped from primitives in JSON
3. **CSS Variables** → Generated from semantic tokens
4. **Tailwind Config** → References CSS variables (not raw values)
5. **Styled Components** → Consume via Tailwind utilities or `var(--token-name)`

**Prohibited:**
- Importing token JSON directly into components
- Hardcoded color/spacing values in components
- Tailwind arbitrary values that bypass semantic tokens (except layout utilities)

---

## Component Development Checklist

When creating a new component:

- [ ] Create headless hook in `headless/{Component}/use{Component}.ts`
- [ ] Define behavioral types in `{Component}.types.ts`
- [ ] Implement all keyboard handlers in headless layer
- [ ] Add all ARIA attributes in headless layer
- [ ] Create styled component in `components/{Component}/{Component}.tsx`
- [ ] Styled component imports and uses headless hook
- [ ] Visual variants use semantic CSS variables only
- [ ] No logic in styled component (only className composition)
- [ ] Write Storybook stories covering all variants and states
- [ ] Verify token usage (no primitives, no hardcoded values)
