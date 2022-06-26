interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: 'primary' | 'secondary';
  children?: React.ReactNode;
}

export function Button({
  variant,
  children,
  ...props
}: ButtonProps) {
  const variantsClassName = {
    primary: "bg-green-500 hover:bg-green-700",
    secondary: "border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900"
  }

  return (
    <a
      className={`p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors ${variantsClassName[variant]}`}
      {...props}
    >
      {children}
    </a>
  )
}