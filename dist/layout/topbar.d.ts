import * as React from 'react';
export interface TopbarProps {
    crumb: string;
    saved?: string;
    actions?: React.ReactNode;
    className?: string;
}
declare function Topbar({ crumb, saved, actions, className }: TopbarProps): React.JSX.Element;
export { Topbar };
