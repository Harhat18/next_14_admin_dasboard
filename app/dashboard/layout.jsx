import Sidebar from "../ui/dasboard/sidebar/sidebar";
import Navbar from "../ui/dasboard/navbar/navbar";
import styles from "../ui/dasboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
