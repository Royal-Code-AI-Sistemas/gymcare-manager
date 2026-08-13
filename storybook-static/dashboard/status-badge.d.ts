import * as React from '../../node_modules/react';
export type StatusTone = 'success' | 'warning' | 'error' | 'info' | 'neutral';
export interface StatusBadgeProps {
    label: React.ReactNode;
    tone?: StatusTone;
    dot?: boolean;
    className?: string;
}
export declare function StatusBadge({ label, tone, dot, className, }: StatusBadgeProps): React.JSX.Element;
