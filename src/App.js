import { gql } from '@apollo/client';
import DisplayPosts from './DisplayPosts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './NavBar';


function App() {

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



  return (
    <BrowserRouter>
      <div className="App container mt-5">
        <NavBar />
        <div className="page-content">
        <h1 className="text-primary"><i className="bi bi-diagram-2-fill"></i>All Posts:</h1>
        <Routes>
          <Route exact path="/" element={<DisplayPosts GET_POSTS={GET_POSTS} />} />
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
