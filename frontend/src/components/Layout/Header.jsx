import { Link } from 'react-router-dom';

function Header () {

    return(

    

        <header className="navigation">

            <h1>CommunityHub</h1>

            <div className="header-links">

        
              <nav>
                  <Link to="/">Home</Link>
                  <Link to="/posts">Posts</Link>
                  <Link to="/create-post">Create Post</Link>
                  <Link to="/about">About</Link>
                </nav>
        
        
                <button>Log In</button>
        
            </div>

      </header>
    );

}

export default Header;

