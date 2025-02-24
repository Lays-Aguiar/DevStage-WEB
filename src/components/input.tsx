import { type ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  error?: boolean
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function Input({ error = false, icon, children, ...props }: InputProps) {
  return (
    <div
      data-error={error}
      className="group flex items-center px-4 gap-2 h-12  bg-gray-800  border border-gray-600 rounded-xl  focus-within:border-gray-100 data-[error=true]:border-danger "
    >
      <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger">
        {icon}
      </span>
      <input className="flex-1 outline-0 placeholder-gray-400 " {...props} />
      {children}
    </div>
  )
}
