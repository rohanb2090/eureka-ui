import { BarChart, BarChartProps } from './BarChart';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface HistogramProps extends BarChartProps { }

/**
 * Histogram - A specialized version of BarChart for showing distributions.
 * It uses the same underlying BarChart logic but is semantically named for clarity.
 */
export function Histogram(props: HistogramProps) {
    return <BarChart {...props} orientation="vertical" />;
}
