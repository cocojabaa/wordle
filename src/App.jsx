import './styles/main.scss';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/play" element={<GamePage />} />
        <Route path="/play/:encodedWord" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
