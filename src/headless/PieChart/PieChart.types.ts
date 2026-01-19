export interface PieChartDataPoint {
    label: string;
    value: number;
    color?: string;
}

export type PieChartVariant = 'pie' | 'donut';

export interface UsePieChartProps {
    data: PieChartDataPoint[];
    variant?: PieChartVariant;
}

export interface PieSegment {
    startAngle: number;
    endAngle: number;
    value: number;
    percentage: number;
    label: string;
    color: string;
    path: string;
}

export interface UsePieChartReturn {
    segments: PieSegment[];
    total: number;
    chartProps: {
        role: 'img';
        'aria-label': string;
    };
    getSegmentProps: (index: number) => {
        tabIndex: 0;
        role: 'graphics-symbol';
        'aria-label': string;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
        onFocus: () => void;
        onBlur: () => void;
    };
    hoveredIndex: number | null;
}
