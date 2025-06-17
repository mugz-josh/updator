import { useState } from 'react';
import './AuthPage.css'; // You'll need to create this CSS file

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string }>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors: { email?: string; password?: string; name?: string } = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isSignIn && !formData.name) {
      newErrors.name = 'Name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would call your authentication API here
      if (isSignIn) {
        // Simulate sign in
        console.log('Signing in with:', formData.email);
        setIsLoggedIn(true);
        setUser({ email: formData.email, name: formData.name || 'User' });
      } else {
        // Simulate sign up
        console.log('Signing up with:', formData);
        setIsLoggedIn(true);
        setUser({ email: formData.email, name: formData.name });
        setIsSignIn(true); // Switch back to sign in after successful sign up
      }
      
      // Reset form
      setFormData({ email: '', password: '', name: '' });
    }
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
    setErrors({});
  };

  if (isLoggedIn) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Welcome, {user?.name}!</h2>
          <p>You are signed in as {user?.email}</p>
          <button onClick={handleSignOut} className="auth-button">
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isSignIn && (
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
          )}
          
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          
          <button type="submit" className="auth-button">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div className="auth-toggle">
          {isSignIn ? "Don't have an account? " : "Already have an account? "}
          <button onClick={toggleAuthMode} className="toggle-button">
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;