'use client'
import React from 'react'
import styles from './Sidebar.module.css'
import { Icon } from '@/components/ui/Icons/Icon'
import { adminLinks } from '@/lib/constants'
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarProfile}>
        <Icon name='user' />
        <span>관리자 이메일</span>
      </div>
      <div className={styles.sidebarLinks}>
        {adminLinks.map((link) => {
          const isActive = pathname === link.path
          return (
            <Link 
              key={link.name} 
              href={link.path} 
              className={`${styles.sidebarLink} ${isActive ? styles.sidebarLinkActive : ''}`}
            >
              <span>{link.name}</span>
              <FaPlus className={styles.sidebarLinkIcon} size={11} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar