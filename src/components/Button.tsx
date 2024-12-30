import { twMerge } from "tailwind-merge"

interface buttonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}
export function Button({ children, ...rest }: buttonProps) {

  return <button
    className={twMerge("bg-darkBlue text-white rounded-lg p-1 px-4 w-fit max-sm:p-0.5", rest.className)}{...rest}>{children}</button>
}
