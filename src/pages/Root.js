import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
export const RootPage = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};
