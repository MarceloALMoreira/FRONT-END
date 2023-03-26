import Navbar from "../../components/Home/Navbar"
import PostsLists from "../../components/Posts/ListPosts"
import NewPost from "../../components/Home/Newposts"
import Search from "../../components/Home/Search"

const Home = () => {
    return (

        <div>
            {/* Todos os components já vem com estilos */}



            {/* Search */}
            <Search />

            {/* Posts List */}
            <PostsLists />


        </div>
    )
}

export default Home