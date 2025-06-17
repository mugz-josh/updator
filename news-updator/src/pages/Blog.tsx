



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Article = {
  id: string;
  title: string;
  author: string;
  authorTitle: string;
  date: string;
  excerpt: string;
  category: string;
  premium?: boolean;
  image: string;
  readingTime: string;
};

type BlogProps = {
  isSignedIn: boolean;
  onSignOut: () => void;
};

const Blog: React.FC<BlogProps> = ({ isSignedIn, onSignOut }) => {
  const navigate = useNavigate();
  const categories = ['All', 'Research', 'Industry', 'Strategy'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const articles: Article[] = [
    {
      id: '1',
      title: 'AI Trends in 2025',
      author: 'Jane Doe',
      authorTitle: 'AI Researcher',
      date: 'June 12, 2025',
      excerpt: 'Discover the latest advancements and predictions in the field of artificial intelligence as we explore how machine learning, neural networks, and quantum computing are transforming industries worldwide.',
      category: 'Research',
      premium: true,
      image: 'https://www.dreamstale.com/wp-content/uploads/2023/08/AI-Futuristic-Landscape-3.jpg',
      readingTime: '5 min read',
    },
    {
      id: '2',
      title: 'Manufacturing in the Age of Automation',
      author: 'John Smith',
      authorTitle: 'Industry Analyst',
      date: 'June 5, 2025',
      excerpt: 'How robotics and AI are reshaping traditional manufacturing sectors, increasing efficiency by 40% while creating new opportunities for skilled workers in emerging technical roles.',
      category: 'Industry',
      image: 'https://cdn.elearningindustry.com/wp-content/uploads/2019/05/the-importance-of-ld-in-the-age-of-automation-1024x574.jpg',
      readingTime: '6 min read',
    },
    {
      id: '3',
      title: 'Strategic Planning for 2030',
      author: 'Alex Johnson',
      authorTitle: 'Strategy Consultant',
      date: 'May 28, 2025',
      excerpt: 'Comprehensive frameworks and market forecasts to inform your long-term strategy, helping organizations navigate economic uncertainties and technological disruptions.',
      category: 'Strategy',
      premium: false,
      image: 'https://www.shutterstock.com/image-photo/vision-2030-concept-photo-asphalt-260nw-2002928570.jpg',
      readingTime: '7 min read',
    },
    {
      id: '4',
      title: 'Sustainable Business Practices',
      author: 'Maria Garcia',
      authorTitle: 'Sustainability Expert',
      date: 'May 15, 2025',
      excerpt: 'Exploring how environmentally conscious operations can drive profitability while meeting consumer demand for corporate responsibility and green initiatives.',
      category: 'Industry',
      premium: true,
      image: 'https://www.worldbank.org/content/dam/photos/780x439/2021/jun-1/uganda-economic-update-uganda-can-achieve-greener-resilient-and-inclusive-growth-by-investing-in-sustainable-land-manage-780x439.jpg',
      readingTime: '8 min read',
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSignOut = () => {
    onSignOut();
    navigate('/');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    alert(`Thank you for subscribing! We'll send our executive briefing to ${form.email.value}`);
    form.reset();
  };

  return (
    <div className="blog-container">
      {/* Sign Out Button */}
      {isSignedIn && (
        <div className="sign-out-container">
          <button onClick={handleSignOut} className="sign-out-btn">
            Sign Out
          </button>
        </div>
      )}

      {/* Header */}
      <header className="blog-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="breadcrumb">Insights / Research Library</div>
          <h1 className="blog-title">Strategic Perspectives</h1>
          <p className="blog-subtitle">Evidence-based research and executive briefings for forward-thinking leaders</p>
          <div className="header-stats">
            <div className="stat-item">
              <span className="stat-number">1,240+</span>
              <span className="stat-label">Research Papers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">280+</span>
              <span className="stat-label">Industry Experts</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Executive Satisfaction</span>
            </div>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="blog-controls">
        <nav className="category-nav">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </nav>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search insights..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="clear-search" onClick={() => setSearchQuery('')}>
              ×
            </button>
          )}
        </div>
      </div>

      {/* Article Cards */}
      <main className="articles-grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <article key={article.id} className="blog-article">
              <div className="article-image-container">
                <img src={article.image} alt={article.title} className="article-image" />
                <span className={`article-category ${article.premium ? 'premium' : ''}`}>
                  {article.category}
                  {article.premium && <span className="premium-badge">Premium</span>}
                </span>
              </div>
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <div className="article-meta">
                  <span className="article-author">{article.author} - {article.authorTitle}</span>
                  <span className="article-date">{article.date}</span>
                </div>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-footer">
                  <a href={`/insights/${article.id}`} className="read-more">Read Full Analysis</a>
                  <span className="reading-time">{article.readingTime}</span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>No matching articles found. Try adjusting your search or filters.</p>
          </div>
        )}
      </main>

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <h3>Subscribe to Our Executive Briefing</h3>
        <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
          <input type="text" name="firstName" placeholder="First Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <select name="industry" required>
            <option value="">Industry</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="blog-footer">
        <p>© 2025 Strategic Insights. All rights reserved.</p>
        <p className="footer-links">
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/contact">Contact Us</a>
        </p>
      </footer>

      {/* Injected CSS */}
      <style>{`
        .blog-container {
          font-family: 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          color: #2d3748;
          line-height: 1.6;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Sign Out Button */
        .sign-out-container {
          padding: 1rem 2rem;
          text-align: right;
        }

        .sign-out-btn {
          padding: 0.6rem 1.2rem;
          background-color: #e53e3e;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .sign-out-btn:hover {
          background-color: #c53030;
          transform: translateY(-1px);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
        }

        /* Header Section */
        .blog-header {
          position: relative;
          background: linear-gradient(135deg, #1a365d 0%, #2a4365 100%);
          color: white;
          padding: 4rem 2rem;
          text-align: center;
          overflow: hidden;
        }

        .header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.2) 100%);
        }

        .header-content {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }

        .breadcrumb {
          font-size: 0.9rem;
          opacity: 0.8;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }

        .blog-title {
          font-size: 2.8rem;
          font-weight: 800;
          margin: 0.5rem 0;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .blog-subtitle {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 2rem;
          opacity: 0.9;
          font-weight: 300;
        }

        .header-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 3rem;
          flex-wrap: wrap;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 140px;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #63b3ed;
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-size: 0.95rem;
          opacity: 0.8;
          letter-spacing: 0.5px;
        }

        /* Filters Section */
        .blog-controls {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 1.5rem;
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 2rem;
        }

        .category-nav {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .category-btn {
          position: relative;
          background: none;
          border: none;
          padding: 0.6rem 1.2rem;
          cursor: pointer;
          font-size: 1rem;
          color: #4a5568;
          transition: all 0.3s ease;
          border-radius: 6px;
        }

        .category-btn:hover {
          background-color: #edf2f7;
          color: #2d3748;
        }

        .category-btn.active {
          color: #3182ce;
          font-weight: 600;
          background-color: #ebf8ff;
        }

        .category-btn.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background: #3182ce;
          border-radius: 3px;
        }

        .search-container {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 280px;
        }

        .search-input {
          padding: 0.7rem 1.2rem;
          padding-right: 2.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          width: 100%;
          transition: all 0.3s ease;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .search-input:focus {
          outline: none;
          border-color: #90cdf4;
          box-shadow: 0 0 0 3px rgba(144, 205, 244, 0.3);
        }

        .clear-search {
          position: absolute;
          right: 0.8rem;
          background: none;
          border: none;
          color: #a0aec0;
          cursor: pointer;
          font-size: 1.3rem;
          padding: 0.2rem;
          transition: color 0.2s ease;
        }

        .clear-search:hover {
          color: #718096;
        }

        /* Articles Grid */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto 4rem;
          padding: 0 2rem;
        }

        .blog-article {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .blog-article:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .article-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .article-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-article:hover .article-image {
          transform: scale(1.05);
        }

        .article-category {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(255, 255, 255, 0.95);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #2d3748;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .premium-badge {
          background: linear-gradient(to right, #f6ad55, #f6871f);
          color: white;
          padding: 0.2rem 0.6rem;
          border-radius: 10px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .article-content {
          padding: 1.8rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .article-title {
          font-size: 1.4rem;
          margin: 0 0 1rem;
          color: #2d3748;
          line-height: 1.4;
          font-weight: 700;
        }

        .article-meta {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          font-size: 0.9rem;
          color: #718096;
          margin-bottom: 1.2rem;
        }

        .article-author {
          font-weight: 500;
          color: #4a5568;
        }

        .article-date {
          font-size: 0.85rem;
        }

        .article-excerpt {
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 1.8rem;
          flex: 1;
        }

        .article-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        .read-more {
          color: #3182ce;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .read-more:hover {
          color: #2c5282;
          text-decoration: underline;
        }

        .read-more::after {
          content: '→';
          transition: transform 0.2s ease;
        }

        .read-more:hover::after {
          transform: translateX(3px);
        }

        .reading-time {
          font-size: 0.85rem;
          color: #a0aec0;
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem;
          color: #718096;
          font-size: 1.2rem;
        }

        /* Newsletter Section */
        .newsletter-cta {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          padding: 4rem 2rem;
          text-align: center;
          margin: 3rem 0;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }

        .newsletter-cta h3 {
          font-size: 2rem;
          color: #2d3748;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .newsletter-form {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.2rem;
          max-width: 800px;
          margin: 2rem auto 0;
        }

        .newsletter-form input,
        .newsletter-form select {
          padding: 0.9rem 1.2rem;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: white;
        }

        .newsletter-form input:focus,
        .newsletter-form select:focus {
          outline: none;
          border-color: #90cdf4;
          box-shadow: 0 0 0 3px rgba(144, 205, 244, 0.3);
        }

        .newsletter-form button {
          grid-column: 1 / -1;
          background: linear-gradient(to right, #3182ce, #2b6cb0);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .newsletter-form button:hover {
          background: linear-gradient(to right, #2b6cb0, #2c5282);
          transform: translateY(-1px);
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        /* Footer */
        .blog-footer {
          background: #2d3748;
          color: white;
          padding: 2rem 1rem;
          text-align: center;
          font-size: 0.95rem;
        }

        .footer-links {
          margin-top: 1rem;
        }

        .footer-links a {
          color: #a0b3c0;
          margin: 0 0.5rem;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        /* Responsive Adjustments */
        @media (max-width: 1024px) {
          .blog-title {
            font-size: 2.4rem;
          }
          
          .blog-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 768px) {
          .blog-header {
            padding: 3rem 1.5rem;
          }
          
          .blog-title {
            font-size: 2rem;
          }
          
          .blog-subtitle {
            font-size: 1rem;
          }
          
          .header-stats {
            gap: 2rem;
          }
          
          .stat-number {
            font-size: 1.8rem;
          }
          
          .blog-controls {
            flex-direction: column;
            align-items: stretch;
            gap: 1.2rem;
            padding: 0 1.5rem;
          }
          
          .category-nav {
            justify-content: center;
          }
          
          .search-container {
            width: 100%;
          }
          
          .articles-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            padding: 0 1.5rem;
          }
          
          .newsletter-cta h3 {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .blog-header {
            padding: 2.5rem 1rem;
          }
          
          .blog-title {
            font-size: 1.8rem;
          }
          
          .header-stats {
            flex-direction: column;
            gap: 1.5rem;
            margin-top: 2rem;
          }
          
          .articles-grid {
            grid-template-columns: 1fr;
          }
          
          .newsletter-cta {
            padding: 3rem 1rem;
          }
          
          .newsletter-cta h3 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
   