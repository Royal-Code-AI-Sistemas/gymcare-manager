import { NavItem } from './sidebar';
import * as React from 'react';
export type { NavItem };
export interface AppShellProps {
    items: NavItem[];
    activeHref?: string;
    onNavigate?: (item: NavItem) => void;
    topbar?: React.ReactNode;
    children: React.ReactNode;
    sidebarHeader?: React.ReactNode;
    sidebarFooter?: React.ReactNode;
    onMenuClick?: () => void;
    className?: string;
}
declare function AppShell({ items, activeHref, onNavigate, topbar, children, sidebarHeader, sidebarFooter, onMenuClick, className, }: AppShellProps): React.JSX.Element;
export { AppShell };
