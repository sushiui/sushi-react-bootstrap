import React from "react";
import SsSite from "./components/SsSite/SsSite";
import SsIcon from "./components/SsIcon/SsIcon";
import SsBody from "./components/SsBody/SsBody";
import { Outlet } from "react-router";
import SsHeader from "./components/SsHeader/SsHeader";
import SsButton from "./components/SsButton/SsButton";
import SsMenu from "./components/SsMenu/SsMenu";
import MockSsPermissionsProvider from "./components/SsMenu/MockSsPermissionsProvider";

type Props = {
  currentPath: string;
}

const Layout = ({currentPath}:Props) => {

  const currentPage = `${currentPath.replace("/sushi-react/","")}-page`;

  const menuProp = {
    menus: [
        {
            id: "1",
            display: "Home",
            link: "/home",
        },
        {
            id: "2",
            display: "Profile",
            link: "/profile",
        },
    ],
    currentPath: "/home",
  }

  return (
    <SsSite className={currentPage}>
      <SsHeader>
        <span className='sitename'>
          <SsIcon name='Sushi' />
          Sushi Design System
        </span>

        <div className='_flex-grow-1'></div>
        <span className='account'>
          <SsButton variant="primary">
            Primary Button
          </SsButton>
        </span>
      </SsHeader>
      <SsBody>
        <div className='menu-panel'>
          <MockSsPermissionsProvider>
            <SsMenu menus={menuProp.menus} currentPath={menuProp.currentPath} />
          </MockSsPermissionsProvider>
        </div>
        <Outlet />
      </SsBody>
    </SsSite>
  );
};

export default Layout;
