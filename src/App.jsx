
import './App.css';
import Header from './Components/Home/Header';
import Navbar from './Components/Home/Navbar';
import Footer from './Components/Footer/Footer';
import AboutUsPage from './Pages/AboutUsPage';
import MissionPage from './Pages/MissionPage';
import MediaGalleryPage from './Pages/MediaGalleryPage';
import ApplyNewVoterPage from './Pages/ApplyNewVoterPage';
import TrackApplicationPage from './Pages/TrackApplicationPage';
import DownloadVoterCardPage from './Pages/DownloadVoterCardPage';
import PoliticalPartyRegisterPage from './Pages/PoliticalPartyRegisterPage';
import CandidateNominationPage from './Pages/CandidateNominationPage';
import ViewAllPartiesPage from './Pages/ViewAllPartiesPage';
import Admin from './Components/admin/admin'; // Import the AdminDashboard
import Imageslider from './Components/Home/Imageslider';
import Login from './Components/Home/Login';
import Sec1 from './Components/Sec1/Sec1';
import VotionButton from './Components/Main/VotingPortal';
import ScrollToTop from './Components/ScrollToTop.JSX';

import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      {location.pathname !== '/admin' && (
        <>
          <Header />
          <Navbar />
        </>
      )}
      
      <Routes>
        <Route path="/" element={
          <>
            <Imageslider />
            <Login />
            <Sec1 />
            <VotionButton />
          </>
        } />
        
        {/* About section */}
        <Route path="/about/about-us" element={<AboutUsPage />} />
        <Route path="/about/mission" element={<MissionPage />} />
        <Route path="/about/media-gallery" element={<MediaGalleryPage />} />

        {/* Voter section */}
        <Route path="/voter/apply-new-voter" element={<ApplyNewVoterPage />} />
        <Route path="/voter/track-application" element={<TrackApplicationPage />} />
        <Route path="/voter/download-voter-card" element={<DownloadVoterCardPage />} />

        {/* Political Party/Candidate section */}
        <Route path="/political-party/register" element={<PoliticalPartyRegisterPage />} />
        <Route path="/political-party/candidate-nomination" element={<CandidateNominationPage />} />
        <Route path="/political-party/view-all-parties" element={<ViewAllPartiesPage />} />

        {/* Admin section */}
        <Route 
          path="/admin" 
          element={
            localStorage.getItem('user') ? <Admin /> : <Navigate to="/" />
          } 
        />
      </Routes>

      {location.pathname !== '/admin' && <Footer />}
    </div>
  );
}

// Wrap App in Router
export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
