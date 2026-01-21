import { useState, useMemo } from 'react';
import { UseScatterPlotProps, UseScatterPlotReturn, RenderedScatterPoint } from './ScatterPlot.types';

const CHART_WIDTH = 400;
const CHART_HEIGHT = 300;
const PADDING = { top: 20, right: 40, bottom: 40, left: 60 };

export function useScatterPlot(props: UseScatterPlotProps): UseScatterPlotReturn {
    const {
        data,
        xMin: customXMin,
        xMax: customXMax,
        yMin: customYMin,
        yMax: customYMax,
        width = CHART_WIDTH,
        height = CHART_HEIGHT,
    } = props;

    const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

    const xMin = customXMin !== undefined ? customXMin : Math.min(...data.map(p => p.x), 0);
    const xMax = customXMax !== undefined ? customXMax : Math.max(...data.map(p => p.x), 10);
    const yMin = customYMin !== undefined ? customYMin : Math.min(...data.map(p => p.y), 0);
    const yMax = customYMax !== undefined ? customYMax : Math.max(...data.map(p => p.y), 10);

    const chartWidth = width - PADDING.left - PADDING.right;
    const chartHeight = height - PADDING.top - PADDING.bottom;

    const points: RenderedScatterPoint[] = useMemo(() => {
        return data.map((p, i) => {
            const xPct = (p.x - xMin) / (xMax - xMin);
            const yPct = (p.y - yMin) / (yMax - yMin);

            return {
                ...p,
                id: p.id || `point-${i}`,
                cx: PADDING.left + xPct * chartWidth,
                cy: PADDING.top + chartHeight - yPct * chartHeight,
                r: p.size || 5,
            };
        });
    }, [data, xMin, xMax, yMin, yMax, chartWidth, chartHeight]);

    const xTicks = useMemo(() => {
        const ticks = [];
        for (let i = 0; i <= 5; i++) {
            ticks.push(xMin + (xMax - xMin) * (i / 5));
        }
        return ticks;
    }, [xMin, xMax]);

    const yTicks = useMemo(() => {
        const ticks = [];
        for (let i = 0; i <= 5; i++) {
            ticks.push(yMin + (yMax - yMin) * (i / 5));
        }
        return ticks;
    }, [yMin, yMax]);

    return {
        points,
        xTicks,
        yTicks,
        xMin,
        xMax,
        yMin,
        yMax,
        hoveredPoint,
        setHoveredPoint,
    };
}
