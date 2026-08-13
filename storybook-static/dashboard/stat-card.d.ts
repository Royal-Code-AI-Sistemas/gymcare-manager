import * as React from '../../node_modules/react';
export interface StatCardProps {
    title: string;
    value: React.ReactNode;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    trend?: {
        value: string;
        positive?: boolean;
    };
    description?: string;
    footer?: React.ReactNode;
    className?: string;
}
export declare function StatCard({ title, value, icon: Icon, trend, description, footer, className, }: StatCardProps): React.JSX.Element;
