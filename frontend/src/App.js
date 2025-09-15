import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen/>,
  },
  {
    path: "/login",
    element: <LoginScreen/>,
  },
  {
    path: "/signup",
    element: <SignUpScreen/>
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
