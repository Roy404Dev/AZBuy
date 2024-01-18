import ProfileSidebar from '@/layout/ProfileSidebar/ProfileSidebar'
import { Outlet } from 'react-router-dom'
import './UserPage.scss';
import Breadcrumbs from '@/components/Primitives/Breadcrumbs';
const UserPage = () => {
  return (
    <div className='user-page'>
      <div className="user-page-wrapper">
        <div className="user-page-header">
          <Breadcrumbs />
        </div>
        <div className="user-page-wrapper-row">
          <ProfileSidebar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserPage