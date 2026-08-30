export interface BarDatum {
    label: string;
    value: number;
}
export interface BarChartProps {
    data: BarDatum[];
    colors?: string[];
    height?: number;
    className?: string;
}
export declare function BarChart({ data, colors, height, className, }: BarChartProps): import("react").JSX.Element;
