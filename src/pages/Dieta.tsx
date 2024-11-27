import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '../components/Button';
import './Dieta.css';
import '../components/Button.css';

const Dieta: React.FC = () => {

    const [comida, setComida] = useState<string>('');

    const apiKey = '7087cd672bfa4473af347d03a0f32f4e';

    const encontrarComida = async () => {
        const response = await axios.get(
            `https://api.spoonacular.com/recipes/complexSearch?random=true&number=1&apiKey=${apiKey}`
        );
        
        const nomeComida = response.data.results[0].title;
        setComida(nomeComida);
    };

    useEffect(() => {
        encontrarComida();
    }, []);

    return (
        <div>
            <h1 className='Titulo'> O QUE POATAN COMERÁ AGORA? </h1>

            <div className='ComidaBox'>
                <p>{comida}</p>
            </div>

            <div className="BoxButton">
                <button className="InnerButton" onClick={encontrarComida}> BUSCAR </button>
            </div>

            <Button valor='VOLTAR' rota='' />
            <Button valor='SOBRE O POATAN' rota='jogo' />
        </div>
    )
}

export default Dieta;