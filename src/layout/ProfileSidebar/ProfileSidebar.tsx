import { Link } from "react-router-dom";
import "./ProfileSidebar.scss";
import { useState } from "react";
import userIcon from "@/ui/icons/userIcon.svg";
import profileIcon from "@/ui/icons/profileIcon.svg";

const ProfileSidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <aside className="user-account-sidebar">
      <ul className="user-account-sidebar__nav">
        <li
          className={`user-account-sidebar__nav-el ${
            selected === 0 ? "selected" : ""
          }`}
          onClick={() => setSelected(0)}
        >
          <Link to="profile">
            <div className="profile-row">
              <img
                src={profileIcon}
                className="user-account-sidebar-icon"
                alt="profile icon"
              />
              <span>Profile</span>
            </div>
          </Link>
        </li>
        <li
          className={`user-account-sidebar__nav-el ${
            selected === 1 ? "selected" : ""
          }`}
          onClick={() => setSelected(1)}
        >
          <Link to="orders">
            <div className="profile-row">
              <img
                src={userIcon}
                className="user-account-sidebar-icon"
                alt="orders icon"
              />
              <span>Orders</span>
            </div>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default ProfileSidebar;
