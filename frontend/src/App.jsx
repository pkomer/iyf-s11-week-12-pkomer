import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePostForm';
import NotFound from './pages/NotFound';


function App() {

    const [posts, setPosts] = useState([]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="posts" element={<Posts />} />
                <Route path="posts/:postId" element={<PostDetail />} />
                <Route path="create-post" element={<CreatePost
                                                      posts={posts}
                                                      setPosts={setPosts}
                                                      />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;