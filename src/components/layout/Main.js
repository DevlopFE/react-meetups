
import {useState, useRef, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  NavLink,
} from 'react-router-dom';
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesPage from "../../pages/Favorites";
import NewMeetupPage from "../../pages/NewMeetup";
import { useMeetup } from '../../util-hooks/useMeetup';
import Layout from './Layout';
import classes from "./Main.module.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './ScrollToTop';


export const Main = () => {
  const headerRef = useRef(null);
  const { MeetupState:{totalFavorites}} = useMeetup()
  const [y, setY] = useState(window.scrollY);
  
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
    <>
    <BrowserRouter>
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

        <Layout>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Navigate to='/all-meetups' replace />} />
              <Route path="/all-meetups" element={<AllMeetupsPage />} />
              <Route path="/form" element={<NewMeetupPage />} />        
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/*" element={<Navigate to='/all-meetups' replace />} />
            </Routes>
          </ScrollToTop>
        </Layout>

    </BrowserRouter>
    <ToastContainer />
    </>
  );
}