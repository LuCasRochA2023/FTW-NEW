import styles from "./Banner.module.css"
import FTW from "../../assets/fotoFTW.png"
const Banner=()=>{
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    O melhor site de Lavagem de Porto Alegre!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas a FTW!
                </p>
            </div>
            <div className={styles.imagens}>
               
                <img className={styles.minhaFoto}
                    src={FTW}
                    alt="imagem ftw"
                />
            </div>
        </div>
    )
}
export default Banner