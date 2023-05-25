import logo from './logo.svg';
import './App.css';
import { SignIn } from './pages/signIn';
import { SignUp } from './pages/signUp';
import { MainRoutes } from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
       <MainRoutes/>
    </div>
  );
}

export default App;
