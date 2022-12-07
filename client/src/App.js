import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <main className='page-container'>
      <Routes>
        {/* <Route path="/" element={<Homepage/>} /> */}



      </Routes>



    </main>

    </BrowserRouter>
  );
}

export default App;
