import React, { useEffect, useRef } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';

const Nav = (props) => {
    console.log(props);
    const linkRef = useRef(null);
    useEffect(() => {
        linkRef.current.click();
    }, []);
    return (
        <div className="m-3">
            <ul className="nav nav-pills justify-content-center">
                <li className="nav-item">
                    {/* <link */}
                    <NavLink
                            // className={
                            //     props.location.pathname === '/'`
                            //         ? 'nav-link active'
                            //         : 'nav-link'
                            // }
                        className="nav-link"
                        ref={linkRef}
                        to="/"
                        exact
                        activeStyle={{backgroundColor:"orange"}}
                    >
                        کار های روز مره
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        //     className={
                        //         props.location.pathname === '/About'
                        //             ? 'nav-link active'
                        //             : 'nav-link'
                        //     }
                        to="/About"
                        className="nav-link"
                        activeStyle={{backgroundColor:"orange"}}

                    >
                        درباره من
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Nav);
