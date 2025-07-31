import React from 'react'
import styles from './AdminButton.module.css'

interface AdminButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'rectangular' | 'rectangular-secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const AdminButton: React.FC<AdminButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`.trim()

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default AdminButton