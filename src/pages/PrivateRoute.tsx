import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

type ChildrenProp = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: ChildrenProp) => {
  const { user } = useAuth0();
  const [loading, setLoading] = useState(true);
  const adminSub = process.env.ADMIN_SUB;
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setLoading(false);
    };

    checkAuthentication();
  }, []);

  if (loading) {
    // Display a loading indicator or component while checking authentication
    return <div>Loading...</div>;
  }

  // If not authenticated, redirect to login page or another route
  if (user?.sub != adminSub) {
    return <Navigate to="/" />;
  }

  // If authenticated, render the children
  return <>{children}</>;
};

export default PrivateRoute;
