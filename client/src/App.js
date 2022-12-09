import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Homepage from './pages/Homepage/Homepage';
import PlayersPage from "./pages/PlayersPage/PlayersPage";
import TeamsPage from './pages/TeamsPage/TeamsPage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Nav />
    <main className='page-container'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/teams" element={<TeamsPage />} />



      </Routes>



    </main>

    </BrowserRouter>
  );
}

export default App;
