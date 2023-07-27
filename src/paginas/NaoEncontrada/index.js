import styles from "./naoEncontrada.module.css"
import error404 from "./erro404.jpg"
import BotaoPrincipal from "componentes/botaoPrincipal"
import { useNavigate } from "react-router-dom"
const NaoEncontrada=()=>{
    const navegar=useNavigate();
    return(
        <>
            <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>
                Ops página não encontrada!
            </h1>
            <p className={styles.paragrafo}>
                Era isso mesmo que estava procurando? 
            </p>
            <p className={styles.paragrafo}>
                Recarregue a página ou tente outro endereço!
            </p>
            <div className={styles.botaoContainer}
                onClick={()=>navegar(-1)}
                            >
                <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
            </div>
            <img className={styles.imagemCachorro}
            src={error404}
            alt="imagem erro 404"
            />
        </div> 
        <div className={styles.espacoEmBranco}>
            
        </div>
        </>
    )
}
export default NaoEncontrada