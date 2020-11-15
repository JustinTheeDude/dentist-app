import React from "react";
import {Link} from "react-router-dom";

let NavBar = () => {
    return (
        <nav id="nav_bar">
            <ul>
                <li>
                    <Link
                        to={{
                            pathname: "/cards",
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect width="20" height="22" fill="none" />
                                </clipPath>
                            </defs>
                            <g id="home" clipPath="url(#clip-path)">
                                <path
                                    id="Path_435"
                                    data-name="Path 435"
                                    d="M3,9l9-7,9,7V20a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2Z"
                                    transform="translate(-2 -1)"
                                    fill="none"
                                    stroke="#7764e4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <path
                                    id="Path_436"
                                    data-name="Path 436"
                                    d="M9,22V12h6V22"
                                    transform="translate(-2 -1)"
                                    fill="none"
                                    stroke="#7764e4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </g>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link
                        to={{
                            pathname: "/form/doctor",
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22">
                            <defs>
                                <clipPath id="clip-path">
                                    <rect width="18" height="22" fill="none" />
                                </clipPath>
                            </defs>
                            <g id="file-text" opacity="0.8" clipPath="url(#clip-path)">
                                <path
                                    id="Path_441"
                                    data-name="Path 441"
                                    d="M14,2H6A2,2,0,0,0,4,4V20a2,2,0,0,0,2,2H18a2,2,0,0,0,2-2V8Z"
                                    transform="translate(-3 -1)"
                                    fill="none"
                                    stroke="#fb6340"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <path
                                    id="Path_442"
                                    data-name="Path 442"
                                    d="M14,2V8h6"
                                    transform="translate(-3 -1)"
                                    fill="none"
                                    stroke="#fb6340"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <line
                                    id="Line_6"
                                    data-name="Line 6"
                                    x1="8"
                                    transform="translate(5 12)"
                                    fill="none"
                                    stroke="#fb6340"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <line
                                    id="Line_7"
                                    data-name="Line 7"
                                    x1="8"
                                    transform="translate(5 16)"
                                    fill="none"
                                    stroke="#fb6340"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                                <path
                                    id="Path_443"
                                    data-name="Path 443"
                                    d="M10,9H8"
                                    transform="translate(-3 -1)"
                                    fill="none"
                                    stroke="#fb6340"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                />
                            </g>
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;