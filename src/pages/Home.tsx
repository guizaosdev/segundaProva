import './Home.css';
import Poatan from '../components/Poatan.tsx';
import Button from '../components/Button.tsx';

const Home: React.FC = () => {

  return (
    <div>

      <h1 className='Titulo'> DIETA DO ALEX POATAN </h1>
      <Poatan />
      <Button valor="QUERO AJUDAR O POATAN" rota="dieta" />
      
    </div>
  )

}

export default Home;