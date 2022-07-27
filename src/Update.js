import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Update = ({ UPDATE_POST, id, data }) => {

    const [title, setTitle] = useState(data.search.title);
    const [body, setBody] = useState(data.search.body);
    const [userId, setUserId] = useState(data.search.userId);
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        updatePost({
            variables: { id, userId, title, body},
        }).then(() => {
            setIsPending(false);
            navigate('/');
        });
    }

    const [updatePost] = useMutation(UPDATE_POST, {
        refetchQueries: [
            'GetPosts'
        ],
    })

    return (
        <div className="form">
            <h2 id="update-heading">Update Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>UserId:</label>
                <select
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)
                    }>
                    <option value="0-user">User 0</option>
                    <option value="1-user">User 1</option>
                    <option value="2-user">User 2</option>
                    <option value="3-user">User 3</option>
                    <option value="4-user">User 4</option>
                </select>
                {!isPending && <button>Update Post</button>}
                {isPending && <button disabled>Updating Post...</button>}
                </form>
        </div>
    )
}

export default Update;