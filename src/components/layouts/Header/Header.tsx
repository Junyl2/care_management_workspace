import React from 'react'
import styles from './Header.module.css'
import { Icon } from '@/components/ui/Icons/Icon'
import AdminButton from '@/components/ui/Button/AdminButton'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerContainer}>
            <div className={styles.headerRight}>
                <div className={styles.headerProfile}>
                    <Icon name='user' backgroundFill="#F3F4F5" fill="#D1D5D9"/>
                    <span>관리자 이메일</span>
                </div>
                <AdminButton variant='secondary'>로그아웃</AdminButton>
            </div>
        </div>
    </header>
  )
}

export default Header