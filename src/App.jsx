import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<GamePage />} />
        <Route path="/play/:encryptedWord" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
