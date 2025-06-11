import AdminDashboard from "../../../../components/Authentication/AdminDashboard";
import styles from "../../../../components/Authentication/AdminDashBoard.module.css";

export default async function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body>
        <div className={styles.dashboardLayout}>
          <div className={styles.dashboardSidebar}>
            <AdminDashboard />
          </div>
          <main className={styles.dashboardMain}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
