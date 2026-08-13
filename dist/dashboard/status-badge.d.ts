import * as React from 'react';
export type StatusTone = 'success' | 'warning' | 'error' | 'info' | 'neutral';
export interface StatusBadgeProps {
    label: React.ReactNode;
    tone?: StatusTone;
    dot?: boolean;
    className?: string;
}
export declare function StatusBadge({ label, tone, dot, className, }: StatusBadgeProps): React.JSX.Element;
