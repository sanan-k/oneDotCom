import React from "react";
import NavBar from "../../components/navBar";
import { logout } from "../../service/auth";

interface IProps extends React.PropsWithChildren {
  onLogedOut: () => void;
}

const Layout = ({ children, onLogedOut }: IProps) => {
  const handleLogout = async () => {
    const err = await logout();
    if (!err) {
      onLogedOut();
    } else {
      alert(err);
    }
  };

  return (
    <div>
      <NavBar onLogoutClick={handleLogout} />
      {children}
    </div>
  );
};

export default Layout;
