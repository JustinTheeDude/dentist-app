import React from "react";
import NavBar from "./NavBar";
import NotificationBar from "./NotificationBar";
const Layout = ({children}) => {
    return (
        <>
            <NavBar />
            <main>
                <NotificationBar />
                {children}
            </main>
        </>
    );
};

export default Layout;
