import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const DisplayPosts = ({ GET_POSTS }) => {
    
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.feed.map(({ id, userId, title, body }) => (
        <div className="single-post" key={ id }>
            <h3>{ title }</h3>
            <h4>User ID: { userId }</h4>
            <br />
            <p>{ body }</p>
            <Link to={`/${ id }`}>
                <button>View details</button>
            </Link>
        </div>
    ));
}

export default DisplayPosts;