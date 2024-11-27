import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Jogo from './pages/Sobre';
import Dieta from './pages/Dieta';

const App: React.FC = () => {

  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/dieta" element={<Dieta />}></Route>
        <Route path="/jogo" element={<Jogo />}></Route>

      </Routes>

    </Router>
  )

}

export default App;