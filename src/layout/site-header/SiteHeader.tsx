import HeaderDashboard from "../HeaderDashboard/HeaderDashboard";
import SiteHeaderMessageBanner from "../../components/SiteHeaderMessage/SiteHeaderMessageBanner";
const SiteHeader = () => {
  return (
    <header className="header">
      <SiteHeaderMessageBanner />
      <HeaderDashboard />
    </header>
  );
};

export default SiteHeader;
