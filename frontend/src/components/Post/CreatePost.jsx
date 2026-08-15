import { useState } from "react";
import { useNavigate } from "react-router-dom"

function CreatePost ({ posts, setPosts}) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(e) {

            e.preventDefault();

            const newPost ={
                 title:  title,
                 content: content
            };

            setPosts([...posts, newPost]);
            navigate("/posts");

        }

        return (

            <form onSubmit={handleSubmit}>

                <label htmlFor="title">Post title</label>

                <input
                    id="title"
                    type="text"
                    placeholder="Post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}

                />

                <label htmlFor="content">Post content</label>

                <textarea
                   id="content"
                   placeholder="Post content"
                   value={content}
                   onChange={(e) => setContent(e.target.value)}

                />

                <button type="submit">

                    Create Post

                </button>

            </form>
        );
    }
export default CreatePost;



