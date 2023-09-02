import React, { FC, } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authRoutes, pageRoutes,} from "routes/index.routes";


const PrivateRoutes: FC = (props) => {
  let isAuthenticated = localStorage.getItem("token")
  const isOnboarded = localStorage.getItem('onboarding')

  if (!isOnboarded) {
    return <Navigate to={pageRoutes.onboarding} />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={authRoutes.login} />;
};

export default PrivateRoutes;
