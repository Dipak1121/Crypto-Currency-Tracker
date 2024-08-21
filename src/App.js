
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import DashBoardPage from './pages/DashBoardPage';
import CoinPage from './pages/CoinPage';
import ComparePage from './pages/ComparePage';
import WatchListPage from './pages/WatchListPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path='/compare' element={<ComparePage />} />
          <Route path='/watchlist' element={<WatchListPage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
