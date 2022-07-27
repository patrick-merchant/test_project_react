import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const PostDetails = ({GET_POST_BY_ID}) => {
    const selected = useParams();
    const id = selected.id;
    
    const { loading, error, data } = useQuery(GET_POST_BY_ID, {
        variables: { id },
    });

    

    return ( 
        <div className="post-details">
            { loading && <div>Loading...</div>}
            {error && <div> {error}</div>}
            {data && (
                <article>
                    <h2>{data.search.title}</h2>
                    <p>Written by {data.search.userId}</p>
                    <div>{data.search.body}</div>
                    <button>delete</button>
                </article>
            )}
        </div>
     );
}

export default PostDetails;