import { JSX } from 'react'
import styles from './button.module.css'

interface IButtonProps {
  text: string
  shadowed?: boolean
  disabled?: boolean
}

const Button = (props: IButtonProps): JSX.Element => {
  return (
    <button
      className={`${styles.button}
      ${props.shadowed === true ? styles.shadowed : ''}
      ${props.disabled === true ? styles.disabled : ''}
      `}
    >
      {props.text}
    </button>
  )
}

export { Button }
