import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Nav />
    <main className='page-container'>
      <Routes>
        {/* <Route path="/" element={<Homepage/>} /> */}



      </Routes>



    </main>

    </BrowserRouter>
  );
}

export default App;
