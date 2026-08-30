export interface ActivityItem {
    quem: string;
    oque: string;
    quando: string;
    cor: string;
}
export interface ActivityFeedProps {
    items: ActivityItem[];
    className?: string;
}
export declare function ActivityFeed({ items, className }: ActivityFeedProps): import("react").JSX.Element;
