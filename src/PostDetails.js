import { useQuery } from "@apollo/client";

const PostDetails = ({GET_POST_BY_ID}) => {
    const { loading, error, data } = useQuery(GET_POST_BY_ID);

    return ( 
        <div className="post-details">
            { loading && <div>Loading...</div>}
            {error && <div> {error}</div>}
            {data && (
                <article>
                    <h2>{data.feed.title}</h2>
                    <p>Written by {data.feed.userId}</p>
                    <div>{data.feed.body}</div>
                    <button>delete</button>
                </article>
            )}
        </div>
     );
}

export default PostDetails;