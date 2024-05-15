import { PropsWithChildren } from 'react'
import { button, type ButtonVariantProps } from '@acme/ui-lib/recipes'

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button className={button(props)}>{children}</button>
}
