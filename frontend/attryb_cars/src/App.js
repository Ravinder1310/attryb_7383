import logo from './logo.svg';
import './App.css';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
// import { MainRoutes } from './pages/MainRoutes';
import AllRoutes from './routes/AllRoutes';
// import AdminRoutes from './routes/AdminRoutes';

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
