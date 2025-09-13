# Library Website Basic

A full-stack library management application with user authentication, book management, and borrowing functionality.

## Project Structure

### Backend
- Node.js Express server
- MongoDB database
- JWT authentication
- RESTful API endpoints

### Frontend
- React.js application
- User interface for library management
- Authentication flows

## Features

- User authentication (signup, login)
- Book management (add, view, update, delete)
- Borrowing system
- User roles (student, librarian)

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository
   ```
   git clone https://github.com/Shivansu77/Library_website_basic.git
   ```

2. Install backend dependencies
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies
   ```
   cd ../frontend
   npm install
   ```

4. Start the backend server
   ```
   cd ../backend
   npm start
   ```

5. Start the frontend application
   ```
   cd ../frontend
   npm start
   ```

## API Endpoints

### User Authentication
- POST /api/users/signup - Create a new user
- POST /api/users/login - Authenticate a user

## License

This project is licensed under the MIT License.