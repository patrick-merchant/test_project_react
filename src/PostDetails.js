import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";

const PostDetails = ({GET_POST_BY_ID, DELETE_POST}) => {
    const selected = useParams();
    const id = selected.id;
    const navigate = useNavigate();
    
    const { loading, error, data } = useQuery(GET_POST_BY_ID, {
        variables: { id },
    });

    const handleDelete = () => {
        deletePost({
            variables: { id },
        }).then(() => {
            navigate('/')
        });


    }
    
    const [deletePost, { loading: deleteLoading, error: deleteError, data: deleteData }] = useMutation(DELETE_POST);


    console.log(data);
    console.log(deleteData);

    return ( 
        <div className="post-details">
            { loading && <div>Loading...</div>}
            {error && <div> {error}</div>}
            {data && (
                <article>
                    <h2>{data.search.title}</h2>
                    <p>Written by {data.search.userId}</p>
                    <div>{data.search.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
        </div>
     );
}

export default PostDetails;