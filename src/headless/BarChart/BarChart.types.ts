export interface ChartDataPoint {
    label: string;
    value: number;
    color?: string;
}

export type ChartOrientation = 'vertical' | 'horizontal';

export interface UseBarChartProps {
    data: ChartDataPoint[];
    orientation?: ChartOrientation;
    maxValue?: number;
    showGrid?: boolean;
    gridLines?: number;
    width?: number;
    height?: number;
    padding?: { top: number; right: number; bottom: number; left: number };
}

export interface BarDimensions {
    x: number;
    y: number;
    width: number;
    height: number;
    value: number;
    label: string;
    color: string;
}

export interface UseBarChartReturn {
    bars: BarDimensions[];
    maxValue: number;
    chartProps: {
        role: 'img';
        'aria-label': string;
    };
    getBarProps: (index: number) => {
        tabIndex: 0;
        role: 'graphics-symbol';
        'aria-label': string;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        onFocus: () => void;
        onBlur: () => void;
    };
    gridLines: number[];
    hoveredIndex: number | null;
}
