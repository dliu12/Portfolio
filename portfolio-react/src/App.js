import { Outlet } from 'react-router-dom';
import './assets/styles/App.css';
import { SocialMedia } from './Shared';
import { ProjectNav } from './components';

function App() {
  return (
    <div className='App'>
      <nav>
        <ProjectNav />
      </nav>
      <Outlet />
      <SocialMedia />
    </div>
  );
}

export default App;
