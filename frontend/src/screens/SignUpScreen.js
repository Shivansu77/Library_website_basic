import React, { useState } from 'react';
import { Form, FormField, Button, Checkbox } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { LibraryApplicationbackend } from '../apis/LibraryApplicationbackend';

const SignupScreen = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "STUDENT"
  });
  const navigate = useNavigate();

  const signUpUser = async (userData) => {
    try {
      const response = await LibraryApplicationbackend.post('/users/signup', userData);
      return response.data.user;
    } catch (error) {
      throw new Error('Signup failed. Please try again.');
    }
  };
  

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    console.log('Signing up with:', userDetails);
    
    if (validateUserDetails()) {
      try {
        const user = await signUpUser(userDetails);
        if(user.type === "LIBRARIAN"){
          navigate('/librarian');
      } else {
          navigate('/student');
      }      
      } catch (error) {
        console.error('Signup error:', error);
      }
    }
  };

  const validateUserDetails = () => {
    return (
      userDetails.firstName?.length > 0 &&
      userDetails.lastName?.length > 0 &&
      userDetails.email?.length > 0 &&
      userDetails.password?.length > 0
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className='app-section'>
      <Form className="ui form" onSubmit={handleSignupSubmit}>
        <FormField>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            value={userDetails.firstName}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <FormField>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            value={userDetails.lastName}
            onChange={handleInputChange}
            required
          />
        </FormField>

        <FormField>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userDetails.email}
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
            value={userDetails.password}
            onChange={handleInputChange}
            required
          />
        </FormField>
        
        <Form.Field>
        <Checkbox
            toggle
            name="type"
            label="Are you a Librarian?"
            checked={userDetails.type === "LIBRARIAN"}
            onChange={(e, { checked }) => 
              setUserDetails(prev => ({ 
                ...prev, 
                type: checked ? "LIBRARIAN" : "STUDENT" 
              }))
              }/>

        </Form.Field>

        <Button type='submit' primary>Sign Up</Button>
        
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <p>
            Already have an account?{' '}
            <Button 
              basic 
              onClick={() => navigate('/login')}
              style={{ padding: '0', background: 'none', color: '#0084ff' }}
            >
              Login here
            </Button>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default SignupScreen;
