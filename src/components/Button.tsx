import { Link } from 'react-router-dom';

import './Button.css';

interface ButtonProps {
    valor: string;
    rota: string
}

const Button: React.FC<ButtonProps> = ({ valor, rota }) => {
    return (
        <div className="BoxButton">
            <Link to={`/${rota}`}>
            <button className="InnerButton">{valor}</button>
            </Link>
            
        </div>
    );
}

export default Button;