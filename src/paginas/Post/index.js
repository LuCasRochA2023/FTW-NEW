import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"  
import PostModelo from "componentes/PostModelo";
import "./post.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import styles from "./post.module.css"
import PostCard from "componentes/PostCard";
const Post=()=>{
    const parametros=useParams();
    const post=posts.find((post)=>{
        return post.id===Number(parametros.id);
    })
        if(!post){
            return( 
                <NaoEncontrada/>
            )
        }
        const recomendaPosta=posts
        .filter((post)=>post.id!==Number(parametros.id))
        .sort((a,b)=>b.id-a.id)
        .slice(0,4);
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route index element={<PostModelo
                fotoCapa={`/assets/posts/${post.id}/capa.jpg`}
                titulo={post.titulo}
                >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você talvez se interesse:
                </h2>
                <ul className={styles.postsRecomendados}>
                    {recomendaPosta.map((post)=>(
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                </ul>
            </PostModelo>}/>
        
        </Route>
    </Routes>
    )     
}
export default Post