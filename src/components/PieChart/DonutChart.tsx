import { PieChart, PieChartProps } from './PieChart';

export type DonutChartProps = Omit<PieChartProps, 'variant'>;

export function DonutChart(props: DonutChartProps) {
    return <PieChart {...props} variant="donut" />;
}
