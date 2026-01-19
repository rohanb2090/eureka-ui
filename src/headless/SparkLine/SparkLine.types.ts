export interface UseSparkLineProps {
    data: number[];
    showDot?: boolean;
}

export interface UseSparkLineReturn {
    pathData: string;
    lastPoint: { x: number; y: number; value: number } | null;
    min: number;
    max: number;
    current: number;
    trend: 'up' | 'down' | 'stable';
    chartProps: {
        role: 'img';
        'aria-label': string;
    };
}
