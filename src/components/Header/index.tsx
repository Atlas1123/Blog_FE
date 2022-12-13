// node_modules
import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import {
    Flex,
    Box,
    Heading,
    Spacer,
    Input,
    InputGroup,

} from "@chakra-ui/react";
import { SearchIcon, PhoneIcon, TimeIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

// store
import { RootState } from "../../store";
import { logout } from "../../store/me-slice";

// context
import AuthContext from "../../store/auth-context";

// consts
import { PATH } from "../../consts";

//style sheet import
import "./header.css";
import img1 from "../../assets/images/facebook.svg";
import img2 from "../../assets/images/instagram.svg";
import img3 from "../../assets/images/twitter.svg";

const HeaderComponent: React.FC = () => {
    const authContext = useContext(AuthContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const me = useSelector((state: RootState) => state.me.me);

    const logoutHandler = () => {
        dispatch(logout());
        authContext.logout();
        history.push(PATH.HOME);
    };

    return (
        <>
        <Flex bgColor={"hsl(0deg 0% 20%)"}>
            <Box className="header-top">                
                <Flex className="logo-side">
                    <Link to={PATH.HOME} className="logo-text">
                        <Heading>colorlib<span></span></Heading>
                    </Link>
                    <Link to={PATH.HOME} className="b-text">
                        <b>+ MERANDA</b>
                    </Link>
                </Flex>
                <Flex className="view-side">
                    <ul className="right-menu">
                        <li><button className=""><PhoneIcon></PhoneIcon></button></li>
                        <li><button className=""><PhoneIcon></PhoneIcon></button></li>
                        <li><button className=""><PhoneIcon></PhoneIcon></button></li>
                        <li className="active"><button className=""><PhoneIcon></PhoneIcon></button></li>
                        <li><button className=""><HamburgerIcon /></button></li>
                    </ul>
                </Flex>
            </Box>
            <Spacer />
        </Flex>
        <Flex bgColor={"#fff"} className="page-container">
            <Box className="main-header">
                <Flex className="main-header-top">
                    <Flex className="main-header-logo">
                        <Heading>Meranda</Heading>
                    </Flex>
                    <Flex className="main-header-search">
                        <Flex className="other-link-area">
                            <a href=""><img src={img1} /></a>
                            <a href=""><img src={img2} /></a>
                            <a href=""><img src={img3} alt="twitter" /></a>
                        </Flex>
                        <Flex className="search-area">
                            <form onSubmit={()=>{return [];}}>
                            <InputGroup>
                                <Input className="search-input"
                                    type="text"
                                    placeholder="Search..."
                                    aria-label="multi search"
                                />
                                <button type="submit" className="search-btn"><SearchIcon color={"white"} /></button>
                            </InputGroup>
                            </form>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex className="main-header-bottom">
                    <ul className="main-header-menu">
                    {authContext.isLoggedIn ? (
                        <>
                        <li><Link to={ PATH.HOME }>home</Link></li>
                        <li><Link to={ PATH.BLOGS }>blog List</Link></li>
                    | {me.username}
                        <li style={{marginLeft: "10px"}}><Link to={ PATH.PROFILE }>Profile</Link></li>
                        <li><Link to="" onClick={logoutHandler}>LogOut</Link></li>                        
                        </>
                    ) : (
                        <>
                        <li><Link to={ PATH.SIGNIN }>Login</Link></li>
                        <li><Link to={ PATH.SIGNUP }>Register</Link></li>
                        </>
                    )}
                    </ul>
                </Flex>
            </Box>
        </Flex>
        <div className="hr"></div>
        </>
    );
};

export default HeaderComponent;
