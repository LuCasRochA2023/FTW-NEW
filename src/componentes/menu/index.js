import MenuLink from "componentes/menulink"
import styles from "./menu.module.css"

    
   
    
    export default function Menu() {
        return (
            <header>
                <nav className={styles.navegacao}>
                    <MenuLink to="/">
                        Início
                    </MenuLink>
                    <MenuLink to="/sobremim">
                        Sobre Nós
                    </MenuLink>
                </nav>
            </header>
        )
    }
