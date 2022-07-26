import { gql } from '@apollo/client';
import DisplayPosts from './DisplayPosts';

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
    <div className="App container mt-5">
      <h1 className="text-primary"><i className="bi bi-diagram-2-fill"></i>hello world</h1>
      <DisplayPosts GET_POSTS={ GET_POSTS } />
    </div>
  );
}

export default App;
