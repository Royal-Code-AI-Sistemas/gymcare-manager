export interface MapPoint {
    name: string;
    x: number;
    y: number;
    value: number;
}
export interface MockMapProps {
    points: MapPoint[];
    height?: number;
    className?: string;
}
export declare function MockMap({ points, height, className, }: MockMapProps): import("react").JSX.Element;
