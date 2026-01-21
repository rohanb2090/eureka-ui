export interface GroupedDataPoint {
    label: string;
    values: {
        id: string;
        value: number;
        label: string;
        color?: string;
    }[];
}

export interface UseGroupedBarChartProps {
    data: GroupedDataPoint[];
    maxValue?: number;
    showGrid?: boolean;
    gridLines?: number;
}

export interface GroupedBarDimensions {
    id: string;
    groupLabel: string;
    x: number;
    y: number;
    width: number;
    height: number;
    value: number;
    label: string;
    color: string;
}

export interface UseGroupedBarChartReturn {
    groups: {
        label: string;
        bars: GroupedBarDimensions[];
    }[];
    maxValue: number;
    gridLines: number[];
    hoveredBar: { groupIndex: number; barIndex: number } | null;
    setHoveredBar: (val: { groupIndex: number; barIndex: number } | null) => void;
}
