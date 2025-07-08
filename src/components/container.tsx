import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-screen-xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}