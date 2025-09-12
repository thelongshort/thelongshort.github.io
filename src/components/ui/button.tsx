import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:shadow-glow hover:scale-105 shadow-lg",
        destructive: "bg-accent-danger text-white hover:bg-accent-danger/90 shadow-lg",
        outline: "border border-primary/20 bg-glass-primary backdrop-blur-xl text-foreground hover:bg-primary/10 hover:border-primary/40 shadow-glass",
        secondary: "bg-glass-secondary backdrop-blur-xl text-secondary-foreground hover:bg-secondary/60 shadow-glass",
        ghost: "hover:bg-glass-accent backdrop-blur-sm hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "bg-gradient-glass backdrop-blur-xl border border-white/10 text-foreground hover:bg-glass-secondary hover:shadow-glass",
        glow: "bg-primary text-primary-foreground hover:shadow-neon hover:scale-105 shadow-glow",
        premium: "bg-primary text-primary-foreground hover:shadow-purple hover:scale-105 shadow-lift",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-12 w-12",
        xl: "h-16 rounded-2xl px-12 text-lg",
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
