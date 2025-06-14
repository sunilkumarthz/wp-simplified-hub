
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-roboto relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-[#04D98B] to-[#037F8C] text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-[#037F8C] hover:to-[#04D98B] font-medium",
        destructive: "bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500",
        outline: "border-2 border-[#04D98B] bg-transparent text-[#04D98B] rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-[#04D98B] hover:to-[#037F8C] hover:text-white hover:border-transparent",
        secondary: "bg-gradient-to-r from-slate-600 to-slate-700 text-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r hover:from-slate-700 hover:to-slate-600",
        ghost: "text-[#04D98B] rounded-2xl hover:bg-[#04D98B]/10 hover:scale-105 hover:text-[#037F8C]",
        link: "text-[#04D98B] underline-offset-4 hover:underline hover:scale-105 hover:text-[#037F8C] transition-colors duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-xl px-3 text-xs",
        lg: "h-12 rounded-2xl px-6 text-base",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
