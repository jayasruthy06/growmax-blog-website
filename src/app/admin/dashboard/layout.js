import styles from "../../../../components/Authentication/AdminDashBoard.module.css";
import AdminDashboard from "../../../../components/Authentication/AdminDashboard";
export default function RootLayout({ children }) {
  return (
    <div className={styles.dashboardLayout}>
      <div className={styles.dashboardSidebar}>
        <AdminDashboard />
      </div>
      <main className={styles.dashboardMain}>
        {children}
      </main>
    </div>
  );
}
