import PostModelo from "componentes/PostModelo"
import fotoFTW from "../../assets/fotoFTW.png"
import styles from "./sobreMim.module.css"
import BotaoPrincipal from "componentes/botaoPrincipal"
import { useNavigate } from "react-router-dom"

const Sobre=()=>{
    const navegar=useNavigate();
    return(
        <PostModelo
            fotoCapa={fotoFTW}
            titulo="Sobre nós"
        >
            <h3 className={styles.subtitulo}>
                Olá! Somos a FTW!
            </h3>
            <p className={styles.paragrafo}>
                A FTW soluções automotivas é uma empresa gaúcha, mais especificamente de Porto Alegre. Vem atuando fortemente no setor automotivo, com seu ponto forte na lavagem e estacionamento de veiculos populares, SUV, e Camionetes de grande porte. Há quase 10 anos no mercado, a empresa e liderada por Márcio Nunes Rocha, de 49 anos, que gerencia a empresa e desenvolve um trabalho ético e responsavel para com seus clientes.

            </p>
            <img src={fotoFTW}
                alt="foto rosto"
                className={styles.fotoSobreMim}
            ></img>
            <p className={styles.paragrafo}>
                A empresa está localizada na rua Carlos Trein Filho, numero 37, no bairro Auxiliadora.

            </p>
            <p className={styles.paragrafo}>
                Com uma boa localizacao, também possui estacionamento rotativo e mensa, vigiado por câmeras e muito bem administrado pelos agentes de segurança e funcionarios.

            </p>
            <p className={styles.subtitulo}>
                Ficou curioso? Conheça também nossos servicos na página inicial!
            </p>
            <div className={styles.botao}
                onClick={()=>navegar(-1)}
                >

                <BotaoPrincipal tamanho="lg">
                   Voltar
                </BotaoPrincipal>
            </div>
            
        </PostModelo>
        
    )
}
export default Sobre