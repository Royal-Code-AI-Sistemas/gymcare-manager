import { VariantProps } from 'class-variance-authority';
import * as React from '../../node_modules/react';
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | "warning" | "error" | "info" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;
export { Badge, badgeVariants };
