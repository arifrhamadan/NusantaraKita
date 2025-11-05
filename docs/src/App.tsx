import { BrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import { routers } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <RouterProvider router={routers} />
    </BrowserRouter>
  );
}

export default App;
