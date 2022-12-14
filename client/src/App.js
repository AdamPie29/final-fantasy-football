import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Homepage from './pages/Homepage/Homepage';
import PlayersPage from "./pages/PlayersPage/PlayersPage";
import TeamsPage from './pages/TeamsPage/TeamsPage';
import CreateTeamPage from './pages/CreateTeamPage/CreateTeamPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SeasonModePage from './pages/SeasonModePage/SeasonModePage';
import AboutPage from './pages/AboutPage/AboutPage';

function App() {
  return (
    <BrowserRouter>
    <div className="page-tablet">
      <Header />
      <Nav /> 
    </div>
    <main className='page-container'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/createteam" element={<CreateTeamPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/season" element={<SeasonModePage />} />
        <Route path ="/about" element={<AboutPage />} />
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
