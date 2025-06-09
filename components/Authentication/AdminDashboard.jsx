"use client";

import React from 'react'
import styles from "./AdminDashBoard.module.css"
import Link from "next/link";
import {useRouter} from "next/navigation";

const AdminDashboard = () => {
  const router = useRouter();
   const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        router.push('/login');
      }
    } catch (error) {
      alert('Error during logout');
    }
  };

  return (    
    <div className={styles.dashboardSidebarContainer}>
       <div className={styles.dashboardSidebarWrap}>
            <Link href="/admin/dashboard/profile"><button className={styles.dashboardButton}>Profile</button></Link>
            <Link href="/admin/dashboard/create-user"><button className={styles.dashboardButton}>Add New User</button></Link>
            <Link href="/admin/dashboard/view-blogs"><button className={styles.dashboardButton}>Manage Blogs</button></Link>
            <Link href="/admin/dashboard/create-blog"><button className={styles.dashboardButton}>Add a Blog</button></Link>
            <button className={styles.dashboardButton} onClick={handleLogout}>Log Out</button>
       </div>
    </div>
  )
}

export default AdminDashboard