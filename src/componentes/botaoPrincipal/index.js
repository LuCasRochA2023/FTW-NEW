import styles from "./botaoPrincipal.module.css"
const BotaoPrincipal=({children, tamanho })=>{
    return (
        <button className={`
            ${styles.botaoLer}
            ${styles[tamanho]}
        `}>
            {children}
        </button>
    )
}
export default BotaoPrincipal