# Chart Components Blueprint

## Overview
Data visualization components following Eureka UI principles: headless-first, accessible, and token-based styling.

---

## Components

### 1. BarChart
**Purpose**: Compare categorical data across different groups

**Visual Characteristics:**
- Vertical or horizontal orientation
- Bars use semantic colors (status or custom)
- Grid lines use `--border-subtle`
- Labels use `--text-secondary`

**Props:**
- `data: Array<{ label: string; value: number; color?: string }>`
- `orientation: 'vertical' | 'horizontal'`
- `showGrid: boolean`
- `showLabels: boolean`
- `barWidth?: number`

**Accessibility:**
- `role="img"` with `aria-label`
- Data table alternative via toggle
- Keyboard navigation through bars

---

### 2. LineChart
**Purpose**: Show trends over time or continuous data

**Visual Characteristics:**
- Line uses `--action-primary` or custom semantic color
- Points use same color with white fill
- Grid uses `--border-subtle`
- Axes use `--text-secondary`

**Props:**
- `data: Array<{ x: number | string; y: number }>`
- `lineColor?: string`
- `showPoints: boolean`
- `showGrid: boolean`
- `smooth: boolean` (bezier curves)

**Accessibility:**
- Data table alternative
- Point values announced on hover
- Keyboard navigation

---

### 3. PieChart / DonutChart
**Purpose**: Show proportional data as parts of a whole

**Visual Characteristics:**
- Segments use semantic status colors or custom palette
- Labels use `--text-primary`
- Hover state darkens segment
- Center label for donut variant

**Props:**
- `data: Array<{ label: string; value: number; color?: string }>`
- `variant: 'pie' | 'donut'`
- `showLabels: boolean`
- `showPercentages: boolean`

**Accessibility:**
- List alternative with percentages
- Segment values announced
- Keyboard selection

---

### 4. AreaChart
**Purpose**: Show volume over time with filled area beneath line

**Visual Characteristics:**
- Area fill uses `--action-primary` at 20% opacity
- Border line uses `--action-primary`
- Grid uses `--border-subtle`

**Props:**
- `data: Array<{ x: number | string; y: number }>`
- `fillOpacity?: number`
- `showGrid: boolean`
- `smooth: boolean`

**Accessibility:**
- Same as LineChart

---

### 5. SparkLine
**Purpose**: Compact trend visualization without axes

**Visual Characteristics:**
- Minimal, no axes or labels
- Line uses semantic color
- Fits in tight spaces (inline with text)
- Small height (24-40px)

**Props:**
- `data: number[]`
- `lineColor?: string`
- `showDot?: boolean` (last value)
- `height?: number`

**Accessibility:**
- Tooltip with min/max/current values
- `aria-label` with trend description

---

### 6. ProgressRing
**Purpose**: Circular progress indicator for single metric

**Visual Characteristics:**
- Track uses `--border-subtle`
- Progress uses semantic color (status or action)
- Center shows percentage or value
- Animates on mount

**Props:**
- `value: number` (0-100)
- `size: 'sm' | 'md' | 'lg'`
- `color?: string`
- `showLabel: boolean`
- `thickness?: number`

**Accessibility:**
- `role="progressbar"`
- `aria-valuenow`, `aria-valuemin`, `aria-valuemax`

---

### 7. Heatmap
**Purpose**: Show magnitude across two dimensions

**Visual Characteristics:**
- Cells use color gradient from low to high value
- Light mode: blue scale
- Dark mode: adjusted blue scale for contrast
- Grid uses `--border-default`

**Props:**
- `data: Array<Array<number>>`
- `rowLabels: string[]`
- `columnLabels: string[]`
- `colorScale?: [string, string]` (min, max colors)

**Accessibility:**
- Tooltip with exact values
- Data table alternative

---

## Headless Architecture

Each chart component split into:

### Headless Hook (Logic)
- Data normalization and scaling
- SVG path calculations
- Interaction state (hover, selection)
- Animation values
- ARIA attribute generation

**Example: `useBarChart`**
```ts
interface UseBarChartProps {
  data: ChartData[];
  maxValue?: number;
}

interface UseBarChartReturn {
  bars: Array<{
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    label: string;
  }>;
  chartProps: {
    role: 'img';
    'aria-label': string;
  };
  getBarProps: (index: number) => {
    onMouseEnter: () => void;
    onFocus: () => void;
    'aria-label': string;
  };
}
```

### Styled Component (Presentation)
- SVG rendering
- Semantic color application
- Responsive sizing
- Tooltip display

---

## Token Usage

**Colors:**
- Primary data: `--action-primary`
- Secondary data: `--action-secondary`
- Success/positive: `--status-success`
- Warning: `--status-warning`
- Error/negative: `--status-error`
- Grid/axes: `--border-subtle`
- Labels: `--text-secondary`

**Spacing:**
- Chart padding: `--spacing-lg`
- Label gaps: `--spacing-sm`
- Legend spacing: `--spacing-md`

---

## Common Features

**All charts must include:**
1. Responsive SVG (viewBox)
2. Tooltip on hover (with Portal)
3. Data table toggle for accessibility
4. Loading skeleton state
5. Empty state messaging
6. Legend (configurable)
7. Title and description props
8. Dark mode support

---

## Implementation Priority

1. **BarChart** - Most common, foundational
2. **LineChart** - Trends and time series
3. **ProgressRing** - Simple, high utility
4. **SparkLine** - Compact utility
5. **PieChart** - Proportions
6. **AreaChart** - Volume visualization
7. **Heatmap** - Advanced use case

---

## External Dependencies

**Recommended: Recharts (already integrates with React + semantic tokens)**

Alternative: Build from scratch with pure SVG for maximum control and minimal bundle size.

---

## Example Usage

```tsx
import { BarChart } from 'eureka-ui';

<BarChart
  data={[
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 52 },
    { label: 'Mar', value: 61 },
  ]}
  orientation="vertical"
  showGrid
  showLabels
/>
```
