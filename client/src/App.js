import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Homepage from './pages/Homepage/Homepage';
import PlayersPage from "./pages/PlayersPage/PlayersPage";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Nav />
    <main className='page-container'>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/players" element={<PlayersPage />} />



      </Routes>



    </main>

    </BrowserRouter>
  );
}

export default App;
