import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.scss";
const Profile = () => {
  const { user } = useAuth0();
  return (
    <div className="profile-page">
      <div className="profile-page-wrapper">
        <span className="profile-page-title">Profile</span>
        <article className="user-profile-dashboard">
          <section className="user-profile-dashboard__tiles">
            <div className="user-profile-dashboard-card user-profile-dashboard-card-member">
              <span>AZBuy</span>
              <div className="user-profile-dashboard-card-credentials">
                <span className="user-profile-dashboard-card-username">
                  <span>{user?.nickname}</span>
                </span>
                <span className="user-profile-dashboard-card-email">
                  <span>{user?.email}</span>
                </span>
              </div>
            </div>
            <div className=" user-profile-dashboard-card user-profile-dashboard-card-wallet">
              <div className="user-profile-dashboard-card-col">
                <span>AZBuy Wallet</span>
                <button>
                  <span>View your wallet</span>
                </button>
              </div>
              <div className="user-profile-dashboard-card-col">
                <div className="wallet-balance">
                  <span>$0</span>
                  {/* TODO get money from database */}
                </div>
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Profile;
