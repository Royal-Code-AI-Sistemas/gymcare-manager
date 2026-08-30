import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "link" | "secondary" | "outline" | "primary" | "lime" | "ghost" | "dark" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
declare function Button({ className, variant, size, asChild, ...props }: ButtonProps): React.JSX.Element;
export { Button, buttonVariants };
