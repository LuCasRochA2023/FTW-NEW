import { Link } from "react-router-dom"
import styles from "./post.module.css"
import BotaoPrincipal from "componentes/botaoPrincipal"
const PostCard=({post})=>{
    return(
       <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                    <img className={styles.capa}
                    src={`/posts/${post.id}/capa.jpg`}
                    alt="imagem de capa">

                    </img>

                    <h2 className={styles.titulo}>{post.titulo}</h2>
                   <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
       </Link>
       
       
    )
}
export default PostCard