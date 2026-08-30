import * as React from 'react'
import { cn } from '../lib/utils'

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      'flex w-full rounded-lg border border-[#D7DBDE] bg-white px-3 py-2 text-[13px] text-[#111] transition-colors placeholder:text-[#8A9096] file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-[#3168A9] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    ref={ref}
    {...props}
  />
))
Input.displayName = 'Input'

export { Input }
