import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './Nav.scss';

function Nav() {
    const [navSize, setnavSize] = useState("6rem");
    const [navColor, setnavColor] = useState("transparent");

    const listenScrollEvent = () => {
        window.scrollY > 10 ? setnavColor("#FFF") : setnavColor("transparent");
        window.scrollY > 10 ? setnavSize("4rem") : setnavSize("6rem");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <div>
            <nav className="nav" style={{
                backgroundColor: navColor,
                height: navSize,
                transition: "all 1s",
                opacity: "80%"
            }}>
                <ul className="nav__list">
                    <li className="nav__item nav__item--first">
                        <NavLink to='/' className="nav__link">About</NavLink>
                    </li>
                    <li className="nav__item nav__item--second">
                        <NavLink to='/about' className="nav__link">Portfolio</NavLink>
                    </li>
                    <li className="nav__item nav__item--third">
                        <NavLink to='/portfolio' className="nav__link">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
