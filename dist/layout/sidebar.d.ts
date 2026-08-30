import * as React from 'react';
export interface NavItem {
    label: string;
    icon?: React.ComponentType<{
        className?: string;
    }>;
    href?: string;
    badge?: string | number;
    indent?: boolean;
    active?: boolean;
    onClick?: () => void;
}
export interface NavGroup {
    title: string;
    items: NavItem[];
}
export interface SidebarProps {
    groups: NavGroup[];
    activeHref?: string;
    onNavigate?: (item: NavItem) => void;
    /** Título da marca no topo (ex.: "GYMCARE"). */
    brandTitle?: string;
    /** Subtítulo em lima (ex.: "ACADEMY · CMS"). */
    brandSubtitle?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}
declare function Sidebar({ groups, activeHref, onNavigate, brandTitle, brandSubtitle, header, footer, className, }: SidebarProps): React.JSX.Element;
export { Sidebar };
