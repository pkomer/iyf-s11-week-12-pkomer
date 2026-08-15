import CreatePostForm from '../components/Post/CreatePost';

function CreatePost({ posts, setPosts }) {

  return (

    <>
         <h2>Create a New Post</h2>

         <CreatePostForm

          posts={posts}

          setPosts={setPosts}

          />
    
       </>
    );
}
export default CreatePost;