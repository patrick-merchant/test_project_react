import graphQLAPI from "./db";
import { useEffect } from "react";

function App() {

  // useEffect(() => {
  //   const apiQuery = {
  //     query: `
  //     {
  //       info 
  //       feed {
  //           id
  //           userId
  //           title
  //           body
  //           }
  //     }
  //     `,
  //   };

  //   fetch(graphQLAPI.baseURL, {
  //     method: "POST",
  //     headers: graphQLAPI.headers,
  //     body: JSON.stringify(apiQuery),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // });

  return (
    <div className="App container mt-5">
      <h1 className="text-primary"><i className="bi bi-diagram-2-fill"></i>hello world</h1>
    </div>
  );
}

export default App;
