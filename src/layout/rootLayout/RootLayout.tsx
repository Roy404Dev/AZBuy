import SiteHeader from "../site-header/SiteHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  );
};

export default RootLayout;
