import './styles/main.scss'
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage/>} />
      </Routes>
    </>
  )
}

export default App
