import React from 'react'
import styles from "./AdminDashBoard.module.css"
import Link from "next/link";

const AdminDashboard = () => {
  return (    
    <div className={styles.dashboardSidebarContainer}>
       <div className={styles.dashboardSidebarWrap}>
            <Link href="/verified/dashboard/all/profile"><button className={styles.dashboardButton}>Profile</button></Link>
            <Link href="/verified/dashboard/admin/create-user"><button className={styles.dashboardButton}>Add New User</button></Link>
            <Link href="/verified/dashboard/all/view-blogs"><button className={styles.dashboardButton}>Manage Blogs</button></Link>
            <Link href="/verified/dashboard/all/create-blog"><button className={styles.dashboardButton}>Add a Blog</button></Link>
       </div>
    </div>
  )
}

export default AdminDashboard