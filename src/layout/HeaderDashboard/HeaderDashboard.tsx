import SearchInput from "../../components/SearchInput/SearchInput";
import userIcon from "../../ui/icons/userIcon.svg";
import cartIcon from "../../ui/icons/cartIcon.svg";
import closeIcon from "../../ui/icons/interface/closeIcon.svg";
import "./HeaderDashboard.scss";
import Categories from "../../components/Categories/Categories";
import useData from "@/hooks/useData";
import { Link } from "react-router-dom";
import useGetData from "@/hooks/useGetData";
import { useAuth0 } from "@auth0/auth0-react";
const HeaderDashboard = () => {
  const { toggleMenu, setToggleMenu } = useData();
  const { user, isAuthenticated } = useAuth0();
  const { data } = useGetData("cart", "userId", user?.sub);
  const { loginWithRedirect } = useAuth0();
  //TODO add quantity
  return (
    <div className="Site-Header-Dashboard">
      <div className="header-dashboard-wrapper">
        <div className="header-dashboard-grid">
          <section className={`menu ${toggleMenu ? "menu-active" : ""}`}>
            <div className="menu-wrapper-top">
              <span className="logo-name">AZBuy</span>
              <img
                src={closeIcon}
                className="close-btn"
                onClick={() => setToggleMenu(!toggleMenu)}
                alt="close icon"
              />
            </div>
            <Categories />
          </section>
          <div className="site-header-dashboard__start">
            <button
              className="hamburgerToggle"
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link to="/">
              <span className="logo-name">AZBuy</span>
            </Link>
          </div>
          <SearchInput />
          <div className="site-header-dashboard__end">
            <div className="site-header-dashboard__end__user">
              <figure>
                {isAuthenticated ? (
                  <Link to={"user/account/profile"}>
                    <img src={userIcon} alt="user icon" />
                  </Link>
                ) : (
                  <img
                    src={userIcon}
                    alt="user icon"
                    onClick={() => loginWithRedirect()}
                  />
                )}
              </figure>
            </div>
            <div className="site-header-dashboard__end__divider"></div>
            <div className="site-header-dashboard__end__cart">
              <figure>
                <Link to="cart">
                  <img src={cartIcon} alt="cart icon" />
                  <span className="site-header-dashboard-cart__count">
                    {data?.length}
                  </span>
                </Link>
              </figure>
            </div>
          </div>
        </div>
        <div className="header-dashboard-categories-desktop">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
