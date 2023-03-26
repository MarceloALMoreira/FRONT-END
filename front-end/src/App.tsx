import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"

import CommentsList from "./components/Posts/CommentsPosts"
import Home from "./pages/Home"
import UserDetails from "./components/User/DetailsUsers"
import UserList from "./components/User/ListUsers"
import NewPost from "./components/Home/Newposts"
import Navbar from "./components/Home/Navbar"


function MeuComponente() {
  const match = useRouteMatch();
}


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
          <Route index element={< Home />} />
          <Route path="/users" element={< UserList />} />
          <Route path='/users/:userId' element={< UserDetails userId={Number()} />} />
          <Route path='/post/:postId/comments' element={< CommentsList postId={Number()} />} />
          <Route path='/newpost' element={< NewPost />} />

        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
function useRouteMatch() {
  throw new Error("Function not implemented.")
}

