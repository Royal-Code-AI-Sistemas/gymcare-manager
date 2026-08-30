import * as React from 'react';
export type StatTone = 'blue' | 'lime' | 'purple' | 'green' | 'amber';
export interface StatCardProps {
    title: string;
    value: React.ReactNode;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    /** Cor do chip do ícone — dá vida aos cards (paleta do design system). */
    tone?: StatTone;
    trend?: {
        value: string;
        positive?: boolean;
    };
    description?: string;
    footer?: React.ReactNode;
    className?: string;
}
export declare function StatCard({ title, value, icon: Icon, tone, trend, description, footer, className, }: StatCardProps): React.JSX.Element;
