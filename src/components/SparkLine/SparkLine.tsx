import { useSparkLine, UseSparkLineProps } from '../../headless/SparkLine';
import { cn } from '../../utils/cn';
import { useChartTheme } from '../../utils/useChartTheme';

export interface SparkLineProps extends UseSparkLineProps {
    className?: string;
    width?: number;
    height?: number;
    lineColor?: string;
    dotColor?: string;
}

export function SparkLine({
    data,
    showDot = true,
    width = 100,
    height = 32,
    lineColor,
    dotColor,
    className,
}: SparkLineProps) {
    const theme = useChartTheme();
    const effectiveLineColor = lineColor || theme.actionPrimary;
    const effectiveDotColor = dotColor || theme.actionPrimary;

    const {
        pathData,
        lastPoint,
        chartProps,
    } = useSparkLine({ data, showDot });

    return (
        <svg
            {...chartProps}
            width={width}
            height={height}
            viewBox={`0 0 100 32`}
            className={cn('inline-block', className)}
            preserveAspectRatio="none"
        >
            <path
                d={pathData}
                fill="none"
                stroke={effectiveLineColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {showDot && lastPoint && (
                <circle
                    cx={lastPoint.x}
                    cy={lastPoint.y}
                    r="2"
                    fill={effectiveDotColor}
                />
            )}
        </svg>
    );
}
