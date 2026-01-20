export interface LineChartDataPoint {
    x: number | string;
    y: number;
}

export interface UseLineChartProps {
    data: LineChartDataPoint[];
    maxY?: number;
    minY?: number;
    smooth?: boolean;
    showPoints?: boolean;
    showGrid?: boolean;
    gridLines?: number;
    width?: number;
    height?: number;
}

export interface UseLineChartReturn {
    pathData: string;
    points: Array<{ x: number; y: number; value: number; label: string }>;
    maxY: number;
    minY: number;
    chartProps: {
        role: 'img';
        'aria-label': string;
    };
    getPointProps: (index: number) => {
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
