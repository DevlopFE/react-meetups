import React, { useRef, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useMeetup } from '../../util-hooks/useMeetup';
import classes from "./Header.module.css";

export const Header = () => {
  const headerRef = useRef(null);
  const [y, setY] = useState(window.scrollY);
  const { MeetupState:{totalFavorites}} = useMeetup()

  const handleScroll = (e) => {
    const header = headerRef.current;
    const window = e.currentTarget;
    if (y > window.scrollY) {
      header.classList.remove(classes.hide);
    } else if (y < window.scrollY) {
      header.classList.add(classes.hide);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));

    return () => { 
      window.removeEventListener("scroll", (e) => handleScroll(e));
    };
  }, [y]);


  return (
    <header ref={headerRef} className={classes.header} data-test="navigation-header">
    <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/all-meetups" className={({isActive}) => isActive ? "nav-active": ''} > All Meetups</NavLink>
          </li>
          <li>
            <NavLink to="/form"  className={({isActive}) => isActive ? "nav-active": ''} > Add New Meetup</NavLink>
          </li>
          <li>
            <NavLink to="/favorites"  className={({isActive}) => isActive ? "nav-active": ''} >
                My Favorites
                <span className={classes.badge}>{totalFavorites}</span>
                </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
