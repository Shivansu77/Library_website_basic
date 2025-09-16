import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import LibrarianScreen from './screens/LibrarianScreen';
import StudentScreen from './screens/StudentScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen/>,
    errorElement: <div>Error loading login page</div>
  },
  {
    path: "/login",
    element: <LoginScreen/>,
    errorElement: <div>Error loading login page</div>
  },
  {
    path: "/signup",
    element: <SignUpScreen/>,
    errorElement: <div>Error loading signup page</div>
  },
  {
    path: "/librarian",
    element: <LibrarianScreen/>,
    errorElement: <div>Error loading librarian dashboard</div>
  },
  {
    path: "/student",
    element: <StudentScreen/>,
    errorElement: <div>Error loading student dashboard</div>
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
