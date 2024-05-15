import { PropsWithChildren } from 'react'
import { button, type ButtonVariantProps } from '@acme/ui-lib/recipes'
import { cx } from '@acme/ui-lib/cx'

export interface ButtonProps extends ButtonVariantProps, PropsWithChildren {}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <button className={cx(button(props), 'lib-btn')}>{children}</button>
}
