import { Outlet } from "react-router-dom";
import styles from "./Root.module.css";
import { NavBar } from "../components/NavBar";
export const RootPage = () => {
  return (
    <>
      <NavBar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};
