import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// ... (keep all your existing styled components)

const ErrorMessage = styled.div`
  color: #e74c3c;
  background: #fdecea;
  border: 1px solid #f5c6cb;
  padding: 10px 16px;
  border-radius: 4px;
  margin-bottom: 16px;
  font-size: 1rem;
  text-align: center;
`;

const ProfileIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #f1c40f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 2.5rem;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
`;

const OpenLoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
`;

const GoldenText = styled.span`
  color: #f1c40f;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  color: #2d3436;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #636e72;
  margin-bottom: 24px;
  text-align: center;
`;

const FooterText = styled.div`
  margin-top: 24px;
  font-size: 1rem;
  color: #636e72;
  text-align: center;
`;

const LoginBox = styled.div`
  background: #fff;
  padding: 40px 32px;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(44, 62, 80, 0.08);
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

// Styled input field
const InputField = styled.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #dfe4ea;
  border-radius: 6px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
  margin-bottom: 4px;
  &:focus {
    border-color: #f1c40f;
  }
`;

// Styled login button
const LoginButton = styled.button`
  width: 100%;
  padding: 12px 0;
  background: #f1c40f;
  color: #2d3436;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 8px;
  &:hover:enabled {
    background: #f9e79f;
  }
  &:disabled {
    background: #f6e58d;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

interface Props {
  onSignIn: (email: string, password: string) => Promise<boolean>;
  isAuthenticated: boolean;
}

const SignInForm: React.FC<Props> = ({ onSignIn, isAuthenticated }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/';
    }
  }, [isAuthenticated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    try {
      const success = await onSignIn(formData.email, formData.password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OpenLoginContainer>
      <LoginBox>
        <ProfileIcon>
          {/* ... (keep your existing SVG) */}
        </ProfileIcon>
        <Title><GoldenText>Login</GoldenText> Portal</Title>
        <Subtitle>Sign in to access your <GoldenText>personalized</GoldenText> news dashboard</Subtitle>
        
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormGroup>
            <InputField
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <LoginButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </LoginButton>
        </form>
        
        <FooterText>
          Don't have an account? <a href="#"><GoldenText>Request access</GoldenText></a>
        </FooterText>
      </LoginBox>
    </OpenLoginContainer>
  );
};

export default SignInForm;