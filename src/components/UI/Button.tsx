interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

const Button:React.FC<ButtonProps> = ({
  children, 
  icon, 
  className='',
  ...props}) => {
  return (
   <button 
   className={`py-4  px-2 text-lg cursor-pointer flex items-center justify-center gap-2 ${className}`}
   {...props}>
    {icon && <span>{icon}</span>}
    {children}
   </button>
  )
}

export default Button
