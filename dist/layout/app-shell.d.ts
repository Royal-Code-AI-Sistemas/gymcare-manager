import { NavGroup, NavItem } from './sidebar';
import * as React from 'react';
export type { NavGroup, NavItem };
export interface AppShellProps {
    groups: NavGroup[];
    activeHref?: string;
    onNavigate?: (item: NavItem) => void;
    /** Título da marca na sidebar (ex.: "GYMCARE"). */
    brandTitle?: string;
    /** Subtítulo em lima (ex.: "ACADEMY · ADMIN"). */
    brandSubtitle?: string;
    topbar?: React.ReactNode;
    children: React.ReactNode;
    sidebarHeader?: React.ReactNode;
    sidebarFooter?: React.ReactNode;
    onMenuClick?: () => void;
    className?: string;
}
declare function AppShell({ groups, activeHref, onNavigate, brandTitle, brandSubtitle, topbar, children, sidebarHeader, sidebarFooter, onMenuClick, className, }: AppShellProps): React.JSX.Element;
export { AppShell };
