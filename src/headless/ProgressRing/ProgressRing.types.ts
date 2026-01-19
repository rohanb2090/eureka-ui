export type ProgressRingSize = 'sm' | 'md' | 'lg';

export interface UseProgressRingProps {
    value: number; // 0-100
    size?: ProgressRingSize;
    thickness?: number;
}

export interface UseProgressRingReturn {
    normalizedValue: number;
    circumference: number;
    strokeDashoffset: number;
    radius: number;
    strokeWidth: number;
    viewBoxSize: number;
    progressProps: {
        role: 'progressbar';
        'aria-valuenow': number;
        'aria-valuemin': 0;
        'aria-valuemax': 100;
        'aria-label': string;
    };
}
