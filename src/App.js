import { gql } from '@apollo/client';
import DisplayPosts from './DisplayPosts';
import PostDetails from './PostDetails';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';


function App() {

  let id = "0";

  const GET_POSTS = gql`
    query GetPosts {
      feed {
        id
        userId
        title
        body
      }
    }
  `;

  const GET_POST_BY_ID = gql`
  query GetPostById {
    search(id: ":ID-post") {
        id
        userId
        title
        body
    }
}
  `

  return (
    <BrowserRouter>
      <div className="App container mt-5">
        <NavBar />
        <div className="page-content">
        <h1 className="text-primary"><i className="bi bi-diagram-2-fill"></i>All Posts:</h1>
        <Routes>
          <Route exact path="/" element={<DisplayPosts GET_POSTS={GET_POSTS} />} />
          <Route path="/create" element={<PostDetails GET_POST_BY_ID={GET_POST_BY_ID} />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
