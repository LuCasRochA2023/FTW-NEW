import styles from "./rodape.module.css"
import facebook from "../../assets/Facebook.png"
import instagran from "../../assets/Instagram.png"
const Rodape=()=>{
    return(
        <footer className={styles.rodape}>
            <ul >
                <li className={styles.lista}>
                    
                    <a   href="https://www.instagram.com/ftwsolucoes/" >
                        <img src={instagran} alt="imagem instagran com link da FTW" className={styles.insta}/>
                    </a>
                    <p className={styles.parag}> FTW soluções automotivas</p>
                    <a href="https://www.facebook.com/ftwsolucoes" c={facebook} alt="imagem facebook">
                        <img src={facebook} alt="imagem facebook com link da FTW"/>
                    </a>
               
                    
                </li>
            </ul>
            
        </footer>
    )
}
export default Rodape