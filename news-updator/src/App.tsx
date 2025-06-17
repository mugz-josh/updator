import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Blog from './pages/Blog';
import SignInForm from './components/SignInForm';

// ProtectedRoute component
import type { ReactNode } from 'react';

const ProtectedRoute = ({ children, isAuthenticated }: { children: ReactNode, isAuthenticated: boolean }) => {
  return isAuthenticated ? children : <Navigate to="/signin" replace />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check localStorage on initial load
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const handleSignIn = async (email: string, password: string): Promise<boolean> => {
    // Replace with your actual authentication logic
    // This is just a mock implementation
    if (email && password) {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div className="App">
        <Navbar 
          isSignedIn={isAuthenticated} 
          onSignOut={handleSignOut} 
        />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route 
            path="/signin" 
            element={
              <SignInFormWrapper 
                onSignIn={handleSignIn} 
                isAuthenticated={isAuthenticated}
              />
            } 
          />

          {/* Protected routes */}
          <Route 
            path="/about" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <About />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/articles" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Articles />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/blog" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Blog isSignedIn={isAuthenticated} onSignOut={handleSignOut} />
              </ProtectedRoute>
            } 
          />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

// Wrapper component to handle navigation after login
const SignInFormWrapper = ({ onSignIn, isAuthenticated }: { 
  onSignIn: (email: string, password: string) => Promise<boolean>,
  isAuthenticated: boolean 
}) => {
  const navigate = useNavigate();

  const handleSignInWithRedirect = async (email: string, password: string) => {
    const success = await onSignIn(email, password);
    if (success) {
      navigate('/about'); // Redirect to /about after successful login
    }
    return success;
  };

  if (isAuthenticated) {
    navigate('/about');
    return null;
  }

  return <SignInForm onSignIn={handleSignInWithRedirect} isAuthenticated={isAuthenticated} />;
};

export default App;