import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'

/*
| Botões no design do CMS (design/GymCare Academy CMS v2.dc.html): flat, rounded-lg, texto
| 13px bold. Variantes: branco com borda (default), lima (ação principal do CMS), azul da
| marca, contorno preto, destrutivo em vermelho-claro e fantasma.
*/
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-[13px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'border border-[#D7DBDE] bg-white text-[#111] hover:bg-[#F4F5F6]',
        lime: 'bg-[#D5FE4C] font-black text-black hover:bg-[#c6f231]',
        primary:
          'bg-[#3168A9] text-white hover:bg-[#27568C]',
        outline:
          'border border-black bg-transparent text-black hover:bg-black hover:text-white',
        destructive:
          'bg-[#FDE2E1] text-[#B42318] hover:bg-[#F8C9C6]',
        secondary:
          'bg-[#EDEFF1] text-[#3D4145] hover:bg-[#E4E6E8]',
        ghost:
          'bg-transparent text-[#3D4145] hover:bg-[#EDEFF1]',
        link: 'text-[#3168A9] underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-3.5 py-2',
        sm: 'px-2.5 py-1.5',
        lg: 'px-4.5 py-3 font-black',
        icon: 'size-9 p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
