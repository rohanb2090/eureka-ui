export interface ScatterPoint {
    x: number;
    y: number;
    id?: string;
    label?: string;
    color?: string;
    size?: number;
}

export interface UseScatterPlotProps {
    data: ScatterPoint[];
    xLabel?: string;
    yLabel?: string;
    xMin?: number;
    xMax?: number;
    yMin?: number;
    yMax?: number;
    showGrid?: boolean;
    width?: number;
    height?: number;
}

export interface RenderedScatterPoint extends ScatterPoint {
    cx: number;
    cy: number;
    r: number;
}

export interface UseScatterPlotReturn {
    points: RenderedScatterPoint[];
    xTicks: number[];
    yTicks: number[];
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    hoveredPoint: string | null;
    setHoveredPoint: (id: string | null) => void;
}
