import React from "react";
import { Flex } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

//

import { PATH } from "../../consts";

//css
import "../../assets/style.css";

import { Box } from "@chakra-ui/react";

//images
import grahicSvg from "../../assets/graphic4.svg";
import logoSvg from "../../assets/logo-light.svg";

const AuthLayoutComponent: React.FC = (props) => {
    const location = useLocation();

    return (
        <>
        <div className="main-container">
            <div className="row" style={{display: "block"}}>
                <div className="left-side">
                    <div className="info-body">
                        <h3 className="title">
                            Get more things done with Loggin platform.
                        </h3>
                        <p className="sub-title">Access to the most powerfull tool in the entire design and web industry.</p>
                        <img src={ grahicSvg } className="graphic-img" />
                    </div>
                </div>
                <div className="right-side">
                    <div className="form-body">
                        <div className="form-content">
                            <div className="light-logo">
                                <img src={ logoSvg } alt="light-logo" />
                            </div>
                            <div className="page-nav">
                                <ul className="nav-menu">
                                    <li className={location.pathname === PATH.SIGNIN ? 'active' : ''}><Link to="signin">Login</Link></li>
                                    <li className={location.pathname === PATH.SIGNUP ? 'active' : ''}><Link to="signup">Register</Link></li>
                                </ul>
                            </div>
                            { props.children }
                            <Box textAlign="left" className="site-links">
                                <span>Or login with</span>
                                <a href="#facebook.com">Facebook</a>
                                <a href="#google.com">Google</a>
                                <a href="#Linkedin.com">Linkedin</a>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AuthLayoutComponent;