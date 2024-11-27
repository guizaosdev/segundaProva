import Button from '../components/Button';
import './Sobre.css';

const Sobre:React.FC = () => {
    return (
        <div>
            <h1 className='Titulo'>SOBRE O POATAN</h1>

            <div className="TextoSobre">

                <p> Alex "Poatan" Pereira é um dos maiores nomes da história das artes marciais, com uma trajetória de ascensão notável no cenário do kickboxing, MMA (Mixed Martial Arts) e, mais recentemente, no UFC (Ultimate Fighting Championship). Sua vida e carreira são marcadas por superação, disciplina e um estilo de luta agressivo, que o tornaram uma verdadeira estrela internacional no mundo dos esportes de combate. Nascido em 7 de julho de 1987, em São Bernardo do Campo, São Paulo, Alex Pereira começou sua jornada como um jovem com poucas perspectivas, mas com uma determinação inabalável para mudar seu destino. Alex Pereira teve uma infância humilde e, como muitos lutadores, enfrentou dificuldades financeiras. Ele cresceu em uma área da periferia de São Bernardo do Campo, onde o esporte era uma forma de escapar da violência e das limitações impostas pelo seu contexto social. Sua entrada no mundo das artes marciais se deu de maneira um tanto casual. No início, Alex foi atraído pelo futebol, mas logo percebeu que sua verdadeira paixão estava em outros esportes. Aos 12 anos, ele começou a praticar kickboxing, sob a orientação de seu primeiro treinador, o professor Emílio, que o incentivou a se aprofundar na modalidade. A dedicação de Pereira ao kickboxing foi evidente desde o começo, mas foi sua transição para o muay thai e, mais tarde, para o MMA, que o catapultou para o reconhecimento internacional. Seu apelido, "Poatan", que significa "mão pesada" em português, reflete sua principal característica no ringue: a força de seus golpes, especialmente os socos e os chutes, que lhe deram fama no mundo das lutas. </p>

            </div>

            <Button valor='VOLTAR' rota='dieta' />
        </div>
    )
}

export default Sobre;