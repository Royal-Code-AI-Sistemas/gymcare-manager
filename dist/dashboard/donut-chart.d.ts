export interface DonutDatum {
    label: string;
    value: number;
    color: string;
}
export interface DonutChartProps {
    data: DonutDatum[];
    size?: number;
    thickness?: number;
    className?: string;
}
export declare function DonutChart({ data, size, thickness, className, }: DonutChartProps): import("react").JSX.Element;
