import Navbar from "../../components/Home/Navbar"
import PostsLists from "../../components/Home/Posts"
import Search from "../../components/Home/Search"

const Home = () => {
    return (

        <div>
            {/* Todos os components já vem com estilos */}


            {/* Header */}
            <Navbar />

            {/* Search */}
            <Search />


            {/* Posts List */}
            <PostsLists />

            {/* Footer */}

        </div>
    )
}

export default Home