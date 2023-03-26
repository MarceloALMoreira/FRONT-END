import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { IPostsLists } from "../../../interfaces/IPostsLists";
import './posts.css'
import listFetch from "../../../axios/config";

const PostsLists = () => {



    const [posts, setPosts] = useState<IPostsLists[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const getPosts = async () => {
        try {
            const response = await listFetch.get("posts/")
            const data = response.data
            setPosts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    // Obter os índices dos posts atuais
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Mudar de página
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    }

    return (
        <section className='postsLists'>
            {currentPosts.length === 0 ? (<p>Carregando...</p>) : (

                currentPosts.map((post) => (
                    <div className="posts" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/post/${post.id}/comments`} className="post_btn">Ver mais</Link>
                    </div>
                ))

            )}

            {/* Paginador */}
            <div className="pagination">
                {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => i + 1).map(number => (
                    <button key={number} onClick={() => paginate(number)} className={`page-item ${currentPage === number ? 'active' : null}`}>
                        {number}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default PostsLists;