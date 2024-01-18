import { Link, useLocation } from "react-router-dom";
import "./Breadcrumbs.scss";

const Breadcrumbs = () => {
  const location = useLocation();
  const splitLocation = location.pathname.split("/").slice(1);

  return (
    <nav className="breadcrumbs-menu">
      {splitLocation.map((part, index) => {
        const isLastPart = index === splitLocation.length - 1;
        const path = `/${splitLocation.slice(0, index + 1).join("/")}`;

        return (
          <div className="breadcrumbs-menu-element" key={index}>
            <Link to={path} className="breadcrumbs-link">
              {part}
            </Link>
            {!isLastPart && <span className="breadcrumbs-menu-splitter">/</span>}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
