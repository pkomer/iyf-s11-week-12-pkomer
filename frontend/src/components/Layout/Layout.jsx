import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {

    return (

        <div className="layout">

          <Header />

          <main>

            <Outlet />


           </main>

          <footer>
                <p>&copy; 2026 CommunityHub</p>

            </footer>

        </div>

    );
}

export default Layout
            
           
        
