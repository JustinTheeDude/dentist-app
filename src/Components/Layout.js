import React from "react";
import NavBar from "./NavBar";
import NotificationBar from "./NotificationBar";
import firebase from 'firebase';
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
