import * as React from '../../node_modules/react';
export interface NavItem {
    label: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    href?: string;
    badge?: string;
    active?: boolean;
    onClick?: () => void;
}
export interface SidebarProps {
    items: NavItem[];
    activeHref?: string;
    onNavigate?: (item: NavItem) => void;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
declare function Sidebar({ items, activeHref, onNavigate, header, footer, className, }: SidebarProps): React.JSX.Element;
export { Sidebar };
