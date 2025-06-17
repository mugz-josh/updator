// src/components/MainContent.tsx
import type { ReactNode } from 'react';
import SearchBar from './SearchBar';

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="main-content">
      <div className="container">
        <SearchBar />
        {children}
      </div>
    </main>
  );
};

export default MainContent;