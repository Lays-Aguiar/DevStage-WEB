import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function Button({ icon, children, className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge("flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer  transition-colors duration-300 hover:bg-blue hover:text-gray-900", className)}
      {...props}
    >

      {children}
      {icon}

    </button>
  )
}
