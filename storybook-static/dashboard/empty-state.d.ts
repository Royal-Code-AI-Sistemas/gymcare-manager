import * as React from '../../node_modules/react';
export interface EmptyStateProps {
    icon?: React.ComponentType<{
        className?: string;
    }>;
    title: string;
    description?: string;
    action?: React.ReactNode;
    className?: string;
}
export declare function EmptyState({ icon: Icon, title, description, action, className, }: EmptyStateProps): React.JSX.Element;
