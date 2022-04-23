
import { useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import AllMeetupsPage from "../../pages/AllMeetupsPage";
import FavoritesPage from "../../pages/Favorites";
import NewMeetupPage from "../../pages/NewMeetup";
import { useMeetup } from '../../util-hooks/useMeetup';
import Layout from './Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './ScrollToTop';
import { useFetch } from '../../util-hooks/useFetch';
import { Header } from './Header';


export const Main = () => {
  const { MeetupState:{allMeetups}, setAllMeetups} = useMeetup()
  const { data } = useFetch({ url: "/data.json" });

  useEffect(() => {
  if(allMeetups.length === 0 && data){
    setAllMeetups(data)
  }
  }, [data])
  
  return (
    <>
    <BrowserRouter>

      <Header />
          <ScrollToTop>

        <Layout>
            <Routes>
              <Route path="/" element={<Navigate to='/all-meetups' replace />} />
              <Route path="/all-meetups" element={<AllMeetupsPage />} />
              <Route path="/form" element={<NewMeetupPage />} />        
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/*" element={<Navigate to='/all-meetups' replace />} />
            </Routes>
        </Layout>

          </ScrollToTop>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}