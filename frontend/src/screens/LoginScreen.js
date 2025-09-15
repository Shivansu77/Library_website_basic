import React, {  useState } from 'react';
import { Form, FormField, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../apis/LibraryApplicationbackend';
const LoginScreen = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate= useNavigate();
  const handleLoginSubmit =async (e) => {
    e.preventDefault();
    console.log('Logging in with:', credentials);
    // Send to backend here (e.g., fetch or axios)
    if(validateCredentials()){
      const user=await loginUser(credentials);
      if(user.type === "LIBRARIAN"){
          navigate('/librarian');
      }else{
        navigate('/student');
  
      }
    }
  };

  const validateCredentials = () => {
    return credentials.email?.length > 0 && credentials.password?.length > 0;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className='app-section'>
      <Form className="ui form" onSubmit={handleLoginSubmit}>
        <FormField>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <FormField>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <Button type='submit' primary>Login</Button>
      </Form>
    </section>
  );
};

export default LoginScreen;
