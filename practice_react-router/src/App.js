import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './router/Router';
function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pageA">PageA</Link>
          </li>
          <li>
            <Link to="/pageB">PageB</Link>
          </li>
        </ul>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
