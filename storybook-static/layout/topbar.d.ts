import * as React from '../../node_modules/react';
export interface TopbarProps {
    title?: string;
    subtitle?: string;
    actions?: React.ReactNode;
    onMenuClick?: () => void;
    showMenu?: boolean;
    className?: string;
}
declare function Topbar({ title, subtitle, actions, onMenuClick, showMenu, className, }: TopbarProps): React.JSX.Element;
export { Topbar };
