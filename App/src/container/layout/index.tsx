import React from "react";
import NavBar from "../../components/navBar";
import { logout } from "../../service/auth";

interface IProps extends React.PropsWithChildren {
  onLogedOut: () => void;
  user?: string;
  role?: string;
}

const Layout = ({ children, onLogedOut, user, role }: IProps) => {
  const handleLogout = async () => {
    const { err } = await logout();
    if (!err) {
      onLogedOut();
    } else {
      alert(err);
    }
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <NavBar user={user} role={role} onLogoutClick={handleLogout} />
      {children}
    </div>
  );
};

export default Layout;
