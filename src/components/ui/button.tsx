// components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-primary)] text-white hover:opacity-85",
        outline: "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:opacity-85",
        danger: "bg-[var(--color-primary)] text-white hover:opacity-85",
        full: "bg-[var(--color-primary)] text-white w-full hover:opacity-85",
        filter: "bg-[var(--color-primary)] text-white w-[278px] h-[32px] text-sm hover:opacity-85",
        small: "bg-[var(--color-primary)] text-white h-[32px] px-4 text-sm hover:opacity-85",
      },
      size: {
        sm: "h-[32px] px-4 text-sm",
        md: "h-10 px-6 text-base",
        lg: "h-[44px] px-6 text-base font-semibold",
        full: "w-full h-[44px] px-6 text-base font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }