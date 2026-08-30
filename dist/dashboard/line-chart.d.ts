export interface LineDatum {
    label: string;
    value: number;
}
export interface LineChartProps {
    data: LineDatum[];
    color?: string;
    height?: number;
    className?: string;
}
export declare function LineChart({ data, color, height, className, }: LineChartProps): import("react").JSX.Element | null;
