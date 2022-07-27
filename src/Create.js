import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ CREATE_POST }) => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        createPost({
            variables: { userId, title, body},
        }).then(() => {
            setIsPending(false);
            navigate('/');
        });
    }

    const [createPost] = useMutation(CREATE_POST, {
        refetchQueries: [
            'GetPosts'
        ],
    });

    return (
        <div className="form">
            <h2 id="create-heading">Add a new post</h2>
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
                    <option>Choose an option</option>
                    <option value="0-user">User 0</option>
                    <option value="1-user">User 1</option>
                    <option value="2-user">User 2</option>
                    <option value="3-user">User 3</option>
                    <option value="4-user">User 4</option>
                </select>
                {!isPending && <button>Add Post</button>}
                {isPending && <button disabled>Adding Post...</button>}
                </form>
        </div>
    );
}

export default Create;