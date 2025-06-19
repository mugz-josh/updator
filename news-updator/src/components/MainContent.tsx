// src/components/MainContent.tsx
import type { ReactNode } from 'react';
// Make sure SearchBar.tsx exists in the same folder, or update the path if it's elsewhere


interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="main-content">
      <div className="container">
        
        {children}
      </div>
    </main>
  );
};

export default MainContent;