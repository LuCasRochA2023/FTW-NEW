import styles from "./PostModelo.module.css"
const PostModelo=({fotoCapa,children,titulo})=>{
    return(
        <article className={styles.PostModeloContainer}>
            <div className={styles.fotoCapa}
                 style={{backgroundImage:`url(${fotoCapa})`}} >

            </div>
            <h2 className={styles.titulo}>
                {titulo}
            </h2>    

            <div className={styles.postConteudoContainer}>
                {children}

            </div>
        </article>
            
        
    )
}
export default PostModelo