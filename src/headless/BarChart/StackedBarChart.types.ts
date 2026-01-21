export interface StackedDataPoint {
    label: string;
    values: {
        id: string;
        value: number;
        label: string;
        color?: string;
    }[];
}

export interface UseStackedBarChartProps {
    data: StackedDataPoint[];
    maxValue?: number;
    showGrid?: boolean;
    gridLines?: number;
}

export interface StackedBarSegment {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    value: number;
    label: string;
    color: string;
}

export interface UseStackedBarChartReturn {
    bars: {
        label: string;
        segments: StackedBarSegment[];
        totalValue: number;
    }[];
    maxValue: number;
    gridLines: number[];
    hoveredSegment: { barIndex: number; segmentIndex: number } | null;
    setHoveredSegment: (val: { barIndex: number; segmentIndex: number } | null) => void;
}
