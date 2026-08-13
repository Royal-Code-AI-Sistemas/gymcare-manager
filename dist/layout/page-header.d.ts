import * as React from 'react';
export interface BreadcrumbItem {
    label: string;
    href?: string;
}
export interface PageHeaderProps {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    className?: string;
}
declare function PageHeader({ title, description, actions, breadcrumbs, className, }: PageHeaderProps): React.JSX.Element;
export { PageHeader };
