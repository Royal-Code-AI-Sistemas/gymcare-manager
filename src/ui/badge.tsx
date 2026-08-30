import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-black transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-[#EDEFF1] text-[#3D4145]',
        secondary: 'bg-[#EDEFF1] text-[#3D4145]',
        destructive: 'bg-[#FDE2E1] text-[#B42318]',
        outline: 'border border-[#D7DBDE] text-[#3D4145]',
        success: 'bg-[#06E785] text-[#00301B]',
        warning: 'bg-[#FFF3C4] text-[#6B4E00]',
        error: 'bg-[#FDE2E1] text-[#B42318]',
        info: 'bg-[#DFEBF8] text-[#27568C]',
        primary: 'bg-[#3168A9] text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
