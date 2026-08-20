import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { postsAPI } from "../../services/api";

function CreatePost() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    

        async function handleSubmit(e) {

            e.preventDefault();

            const newPost ={
                 title:  title,
                 content: content
            };

            try {
                await postsAPI.create(newPost);
                navigate("/posts");
            }  catch (error) {
                 console.error(error);
            }

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



