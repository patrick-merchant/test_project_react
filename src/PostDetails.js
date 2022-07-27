import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Update from "./Update";

const PostDetails = ({GET_POST_BY_ID, DELETE_POST, UPDATE_POST}) => {

    const navigate = useNavigate();

    const selected = useParams();
    const id = selected.id;

    console.log(id);
    
    const { loading, error, data } = useQuery(GET_POST_BY_ID, {
        variables: { id },
    });    
    
    console.log(data);

    const handleDelete = () => {
        deletePost({
            variables: { id },
        }).then(() => {
            navigate('/')
        });
    }

    const [deletePost] = useMutation(DELETE_POST, {
        refetchQueries: [
            'GetPosts'
        ],
    });

    return ( 
        <div className="post-details">
            { loading && <div>Loading...</div>}
            {error && <div> {error}</div>}
            {data && (
                <div className="inspected-post">
                    <h2>{data.search.title}</h2>
                    <p>Posted by {data.search.userId}</p>
                    <p>{data.search.body}</p>
                    <button onClick={handleDelete}>delete</button>
                </div>
            )}
            {data && (<Update UPDATE_POST={UPDATE_POST} data={data} id={id} />)}
        </div>
     );
}

export default PostDetails;