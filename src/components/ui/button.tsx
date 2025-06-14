
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-roboto relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "btn-gradient text-slate-900 font-bold hover:scale-105 shadow-lg transform hover:-translate-y-1 active:translate-y-0",
        destructive:
          "btn-gradient-destructive text-white font-bold hover:scale-105 shadow-lg transform hover:-translate-y-1 active:translate-y-0",
        outline:
          "border-2 border-wp-teal bg-transparent text-wp-teal hover:bg-wp-teal hover:text-slate-900 hover:scale-105 shadow-lg transform hover:-translate-y-1 active:translate-y-0 font-bold",
        secondary:
          "btn-gradient-secondary text-white font-bold hover:scale-105 shadow-lg transform hover:-translate-y-1 active:translate-y-0",
        ghost: "text-wp-teal hover:bg-wp-teal/20 hover:text-wp-teal hover:scale-105 font-bold",
        link: "text-wp-teal underline-offset-4 hover:underline hover:scale-105 font-bold",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-md px-4 py-2",
        lg: "h-14 rounded-md px-8 py-4 text-lg",
        icon: "h-12 w-12",
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
