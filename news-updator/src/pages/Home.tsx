import React from 'react';

const NewsAppHome = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Newsletter subscription logic
  };

  return (
    <div className="news-app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="header-brand">
            <h1 className="app-title">The Global Chronicle</h1>
            <p className="app-subtitle">Est. 1846 • Veritas in Omnia</p>
          </div>
          <nav className="main-nav">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">World</a>
            <a href="#" className="nav-link">Politics</a>
            <a href="#" className="nav-link">Business</a>
            <a href="#" className="nav-link">Technology</a>
            <a href="#" className="nav-link">Science</a>
            <a href="#" className="nav-link">Culture</a>
          </nav>
          <div className="header-actions">
            <button className="subscribe-btn">Subscribe</button>
            <button className="signin-btn">Sign In</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-category">EXCLUSIVE REPORT</span>
              <h2 className="hero-headline">Global Summit Yields Climate Agreement as Temperatures Reach Record Highs</h2>
              <p className="hero-excerpt">World leaders have reached a historic accord on emissions targets after marathon negotiations, even as new data shows 2025 is on track to be the hottest year ever recorded.</p>
              <div className="hero-meta">
                <span className="byline">By Maria Joshua, Senior Environmental Correspondent</span>
                <span className="date">June 15, 2025 • Updated 8:42 AM GMT</span>
              </div>
              <button className="read-more-btn">Read Full Story</button>
            </div>
            <div className="hero-image">
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Breaking News */}
        <section className="breaking-news">
          <div className="breaking-container">
            <span className="breaking-label">BREAKING:</span>
            <div className="ticker-container">
              <div className="ticker-content">
                <span>• Federal Reserve announces 0.25% rate cut • Quantum computing breakthrough • UN Security Council emergency session • Tropical storm becomes hurricane • Nobel laureates summit</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <section className="main-grid">
          <div className="grid-container">
            <div className="featured-column">
              <div className="section-header">
                <h3 className="section-title">Editor's Picks</h3>
                <div className="section-divider"></div>
              </div>
              
              <article className="featured-article">
                <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="article-content">
                  <span className="article-category">Technology</span>
                  <h4>The AI Revolution: How New Regulations Will Shape Innovation</h4>
                  <p>Governments worldwide race to establish AI governance frameworks as tech leaders warn about stifling progress in critical areas.</p>
                  <div className="article-meta">
                    <span>By Dr. Elizabeth Joyce</span>
                    <span>14 min read</span>
                  </div>
                </div>
              </article>
              
              <article className="featured-article">
                <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="article-content">
                  <span className="article-category">Economy</span>
                  <h4>Markets Rally as Central Banks Signal End to Tightening Cycle</h4>
                  <p>Global stocks surged after coordinated statements suggesting the era of aggressive rate hikes may be ending.</p>
                  <div className="article-meta">
                    <span>By Peace Johnson</span>
                    <span>8 min read</span>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="primary-column">
              <div className="section-header">
                <h3 className="section-title">Top Stories</h3>
                <div className="section-divider"></div>
              </div>
              
              <article className="primary-article">
                <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1575320181282-9afab399332c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="article-content">
                  <span className="article-category">Politics</span>
                  <h4>Landmark Legislation Passes After Contentious Debate</h4>
                  <p>Lawmakers approved sweeping reforms to healthcare and education systems affecting millions.</p>
                  <div className="article-meta">
                    <span>By Carol Williams</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </article>
              
              <article className="primary-article">
                <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="article-content">
                  <span className="article-category">Science</span>
                  <h4>New Approach to Cancer Treatment Shows Promise</h4>
                  <p>Novel immunotherapy approach demonstrates remarkable efficacy in early clinical trials.</p>
                  <div className="article-meta">
                    <span>By Dr. Robert Joshua</span>
                    <span>10 min read</span>
                  </div>
                </div>
              </article>
              
              <article className="primary-article">
                <div className="article-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
                <div className="article-content">
                  <span className="article-category">Culture</span>
                  <h4>Major Exhibition Redefines Art Historical Narratives</h4>
                  <p>Metropolitan Museum show challenges traditional Western-centric perspectives.</p>
                  <div className="article-meta">
                    <span>By Joshua Park</span>
                    <span>7 min read</span>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="secondary-column">
              <div className="section-header">
                <h3 className="section-title">Opinion</h3>
                <div className="section-divider"></div>
              </div>
              
              <article className="opinion-piece">
                <div className="author-info">
                  <div className="author-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}></div>
                  <div className="author-details">
                    <span className="author-name">Joshua Wilson</span>
                    <span className="author-title">Senior Columnist</span>
                  </div>
                </div>
                <h4>The Case for Optimism in Troubled Times</h4>
                <p>Despite challenges, there are compelling reasons to believe in humanity's capacity for progress.</p>
                <button className="read-opinion-btn">Read Full Column</button>
              </article>
              
              <div className="newsletter-form">
                <h4>The Morning Brief</h4>
                <p>Get our daily briefing with important global news and analysis.</p>
                <form onSubmit={handleSubmit}>
                  <input type="email" placeholder="Your email address" required />
                  <button type="submit">Subscribe</button>
                </form>
                <p className="privacy-note">We respect your privacy. Unsubscribe anytime.</p>
              </div>

              <div className="trending-topics">
                <h4>Trending Topics</h4>
                <ul>
                  <li><a href="#">#ClimateAccord2025</a></li>
                  <li><a href="#">#AIGovernance</a></li>
                  <li><a href="#">#MarketRally</a></li>
                  <li><a href="#">#CancerResearch</a></li>
                  <li><a href="#">#ArtHistory</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Spotlight */}
        <section className="spotlight-section">
          <div className="spotlight-container">
            <div className="section-header">
              <h3 className="section-title">Special Investigation</h3>
              <div className="section-divider"></div>
            </div>
            
            <div className="spotlight-content">
              <div className="spotlight-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')"}}></div>
              <div className="spotlight-details">
                <span className="spotlight-tag">IN-DEPTH</span>
                <h3>The Future of Work: How Remote and Hybrid Models Are Reshaping Industries</h3>
                <p>Our investigation explores how flexible work arrangements are transforming urban economies and family dynamics worldwide.</p>
                <button className="read-spotlight-btn">Explore the Series</button>
                <div className="spotlight-meta">
                  <span>12-part series</span>
                  <span>Interactive features</span>
                  <span>Global perspectives</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="category-section">
          <div className="category-container">
            <div className="category-card">
              <div className="category-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}>
                <h3>Business</h3>
              </div>
              <div className="category-links">
                <a href="#">Market Trends</a>
                <a href="#">Startups</a>
                <a href="#">Leadership</a>
                <a href="#">View All</a>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}>
                <h3>Science</h3>
              </div>
              <div className="category-links">
                <a href="#">Education</a>
                <a href="#">Health</a>
                <a href="#">Environment</a>
                <a href="#">View All</a>
              </div>
            </div>
            
            <div className="category-card">
              <div className="category-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')"}}>
                <h3>Culture</h3>
              </div>
              <div className="category-links">
                <a href="#">Arts</a>
                <a href="#">Books</a>
                <a href="#">Ideas</a>
                <a href="#">View All</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>Joshua News</h3>
            <p>Journalism of Principle Since 2024</p>
          </div>
          
          <div className="footer-links">
            <div className="link-column">
              <h4>News</h4>
              <a href="#">World</a>
              <a href="#">Politics</a>
              <a href="#">Business</a>
              <a href="#">Technology</a>
              <a href="#">Science</a>
              <a href="#">Health</a>
            </div>
            
            <div className="link-column">
              <h4>Opinion</h4>
              <a href="#">Editorials</a>
              <a href="#">Columns</a>
              <a href="#">Letters</a>
              <a href="#">Analysis</a>
            </div>
            
            <div className="link-column">
              <h4>Features</h4>
              <a href="#">Arts</a>
              <a href="#">Books</a>
              <a href="#">Style</a>
              <a href="#">Food</a>
              <a href="#">Travel</a>
            </div>
            
            <div className="link-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
              <a href="#">Ethics</a>
              <a href="#">Diversity</a>
            </div>
          </div>
          
          <div className="footer-legal">
            <div className="legal-links">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Accessibility</a>
            </div>
            <div className="copyright">
              © 2025 Josh News.. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Styles */}
      <style>{`
        :root {
          --primary-color: #8b0000;
          --primary-dark: #700000;
          --text-color: #222;
          --text-light: #555;
          --text-lighter: #777;
          --border-color: #e0e0e0;
          --bg-light: #f9f7f4;
          --white: #ffffff;
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .news-app-container {
          font-family: 'Georgia', 'Times New Roman', serif;
          color: var(--text-color);
          line-height: 1.6;
          background-color: var(--bg-light);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        a {
          text-decoration: none;
          color: inherit;
          transition: color 0.3s ease;
        }
        
        a:hover {
          color: var(--primary-color);
        }
        
        button {
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          font-family: inherit;
        }
        
        /* Header Styles */
        .app-header {
          background-color: var(--white);
          border-bottom: 1px solid var(--border-color);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .header-content {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        
        .app-title {
          font-family: 'Times New Roman', serif;
          font-size: 2rem;
          font-weight: 700;
          margin: 0;
        }
        
        .app-subtitle {
          font-size: 0.7rem;
          color: var(--text-lighter);
          letter-spacing: 1px;
          margin-top: 0.25rem;
          font-style: italic;
        }
        
        .main-nav {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .nav-link {
          font-family: 'Georgia', serif;
          font-size: 0.85rem;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          padding: 0.5rem 0;
          font-weight: 500;
        }
        
        .nav-link.active {
          color: var(--primary-color);
          font-weight: 700;
        }
        
        .nav-link.active:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary-color);
        }
        
        .header-actions {
          display: flex;
          gap: 1rem;
        }
        
        .subscribe-btn {
          background-color: var(--primary-color);
          color: var(--white);
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          border-radius: 3px;
        }
        
        .subscribe-btn:hover {
          background-color: var(--primary-dark);
        }
        
        .signin-btn {
          background-color: transparent;
          border: 1px solid var(--border-color);
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          border-radius: 3px;
        }
        
        .signin-btn:hover {
          border-color: var(--primary-color);
          color: var(--primary-color);
        }
        
        /* Hero Section */
        .hero-section {
          background-color: #f0ede8;
          border-bottom: 1px solid var(--border-color);
        }
        
        .hero-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          min-height: 500px;
          position: relative;
        }
        
        .hero-content {
          flex: 1;
          padding: 3rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          z-index: 2;
          max-width: 600px;
        }
        
        .hero-image {
          flex: 1;
          background-image: url('https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, rgba(240,237,232,1) 0%, rgba(240,237,232,0) 50%);
        }
        
        .hero-category {
          font-family: 'Arial', sans-serif;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-color);
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .hero-headline {
          font-family: 'Times New Roman', serif;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 0 0 1.5rem 0;
        }
        
        .hero-excerpt {
          font-size: 1.1rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .hero-meta {
          display: flex;
          gap: 1.5rem;
          font-family: 'Arial', sans-serif;
          font-size: 0.85rem;
          color: var(--text-lighter);
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .read-more-btn {
          background-color: transparent;
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
          padding: 0.75rem 1.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 3px;
        }
        
        .read-more-btn:hover {
          background-color: var(--primary-color);
          color: var(--white);
        }
        
        /* Breaking News */
        .breaking-news {
          background-color: var(--primary-color);
          color: var(--white);
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-color);
        }
        
        .breaking-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        
        .breaking-label {
          font-family: 'Arial', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-right: 1.5rem;
          white-space: nowrap;
        }
        
        .ticker-container {
          overflow: hidden;
          white-space: nowrap;
        }
        
        .ticker-content {
          display: inline-block;
          padding-left: 100%;
          animation: ticker 30s linear infinite;
          font-size: 0.9rem;
        }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        /* Main Grid */
        .main-grid {
          padding: 3rem 0;
        }
        
        .grid-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 2.5rem;
        }
        
        .section-header {
          margin-bottom: 2rem;
        }
        
        .section-title {
          font-family: 'Times New Roman', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 0.75rem 0;
        }
        
        .section-divider {
          height: 1px;
          background-color: var(--border-color);
          width: 100%;
          position: relative;
        }
        
        .section-divider:after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 50px;
          height: 2px;
          background-color: var(--primary-color);
        }
        
        /* Featured Column */
        .featured-column {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .featured-article {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 2.5rem;
        }
        
        .featured-article:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        
        .featured-article .article-image {
          height: 220px;
          background-size: cover;
          background-position: center;
          margin-bottom: 1.5rem;
          border-radius: 3px;
        }
        
        .article-category {
          font-family: 'Arial', sans-serif;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-color);
          margin-bottom: 0.75rem;
          display: block;
          font-weight: 600;
        }
        
        .featured-article h4 {
          font-family: 'Times New Roman', serif;
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }
        
        .featured-article p {
          font-size: 1rem;
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .article-meta {
          display: flex;
          justify-content: space-between;
          font-family: 'Arial', sans-serif;
          font-size: 0.85rem;
          color: var(--text-lighter);
        }
        
        /* Primary Column */
        .primary-column {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .primary-article {
          display: flex;
          gap: 1.75rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid var(--border-color);
        }
        
        .primary-article:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        
        .primary-article .article-image {
          min-width: 180px;
          height: 140px;
          background-size: cover;
          background-position: center;
          border-radius: 3px;
        }
        
        .primary-article .article-content {
          flex: 1;
        }
        
        .primary-article h4 {
          font-family: 'Times New Roman', serif;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.75rem 0;
        }
        
        .primary-article p {
          font-size: 0.95rem;
          color: var(--text-light);
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }
        
        /* Secondary Column */
        .secondary-column {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        
        .opinion-piece {
          background-color: var(--white);
          padding: 1.75rem;
          border: 1px solid var(--border-color);
          border-radius: 3px;
        }
        
        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        
        .author-image {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-size: cover;
          background-position: center;
        }
        
        .author-name {
          font-family: 'Times New Roman', serif;
          font-weight: 700;
          font-size: 1rem;
        }
        
        .author-title {
          font-family: 'Arial', sans-serif;
          font-size: 0.85rem;
          color: var(--text-lighter);
        }
        
        .opinion-piece h4 {
          font-family: 'Times New Roman', serif;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }
        
        .opinion-piece p {
          font-size: 0.95rem;
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .read-opinion-btn {
          background-color: transparent;
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
          padding: 0.6rem 1.25rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 3px;
        }
        
        .read-opinion-btn:hover {
          background-color: var(--primary-color);
          color: var(--white);
        }
        
        /* Newsletter */
        .newsletter-form {
          background-color: var(--white);
          padding: 1.75rem;
          border: 1px solid var(--border-color);
          border-radius: 3px;
        }
        
        .newsletter-form h4 {
          font-family: 'Times New Roman', serif;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 0.75rem 0;
        }
        
        .newsletter-form p {
          font-size: 0.95rem;
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        
        .newsletter-form form {
          display: flex;
          margin-bottom: 0.75rem;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 0.75rem;
          border: 1px solid var(--border-color);
          font-family: 'Georgia', serif;
          font-size: 0.95rem;
          border-radius: 3px 0 0 3px;
        }
        
        .newsletter-form button {
          background-color: var(--primary-color);
          color: var(--white);
          padding: 0 1.25rem;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 0 3px 3px 0;
        }
        
        .newsletter-form button:hover {
          background-color: var(--primary-dark);
        }
        
        .privacy-note {
          font-size: 0.8rem;
          color: var(--text-lighter);
        }
        
        /* Trending Topics */
        .trending-topics {
          background-color: var(--white);
          padding: 1.75rem;
          border: 1px solid var(--border-color);
          border-radius: 3px;
        }
        
        .trending-topics h4 {
          font-family: 'Times New Roman', serif;
          font-size: 1.25rem;
          font-weight: 700;
          margin: 0 0 1rem 0;
        }
        
        .trending-topics ul {
          list-style: none;
        }
        
        .trending-topics li {
          margin-bottom: 0.75rem;
        }
        
        .trending-topics a {
          font-size: 0.95rem;
          color: var(--primary-color);
          font-weight: 500;
        }
        
        .trending-topics a:hover {
          text-decoration: underline;
        }
        
        /* Spotlight */
        .spotlight-section {
          background-color: var(--white);
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          padding: 3.5rem 0;
        }
        
        .spotlight-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .spotlight-content {
          display: flex;
          gap: 3rem;
          align-items: center;
        }
        
        .spotlight-image {
          flex: 1;
          height: 400px;
          background-size: cover;
          background-position: center;
          border-radius: 3px;
        }
        
        .spotlight-details {
          flex: 1;
        }
        
        .spotlight-tag {
          font-family: 'Arial', sans-serif;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--primary-color);
          margin-bottom: 1rem;
          display: block;
          font-weight: 600;
        }
        
        .spotlight-details h3 {
          font-family: 'Times New Roman', serif;
          font-size: 1.8rem;
          font-weight: 700;
          margin: 0 0 1.5rem 0;
          line-height: 1.3;
        }
        
        .spotlight-details p {
          font-size: 1.05rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .read-spotlight-btn {
          background-color: transparent;
          border: 1px solid var(--primary-color);
          color: var(--primary-color);
          padding: 0.75rem 1.5rem;
          font-size: 0.95rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-radius: 3px;
        }
        
        .read-spotlight-btn:hover {
          background-color: var(--primary-color);
          color: var(--white);
        }
        
        .spotlight-meta {
          display: flex;
          gap: 1.5rem;
          font-family: 'Arial', sans-serif;
          font-size: 0.85rem;
          color: var(--text-lighter);
        }
        
        /* Categories */
        .category-section {
          padding: 3rem 0;
          background-color: var(--bg-light);
        }
        
        .category-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .category-card {
          background-color: var(--white);
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .category-image {
          height: 180px;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
          position: relative;
        }
        
        .category-image:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%);
        }
        
        .category-image h3 {
          font-family: 'Times New Roman', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--white);
          position: relative;
          z-index: 1;
          margin: 0;
        }
        
        .category-links {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .category-links a {
          font-family: 'Georgia', serif;
          font-size: 0.95rem;
          color: var(--text-light);
        }
        
        .category-links a:hover {
          color: var(--primary-color);
        }
        
        .category-links a:last-child {
          color: var(--primary-color);
          font-weight: 500;
          margin-top: 0.5rem;
        }
        
        /* Footer */
        .app-footer {
          background-color: #222;
          color: #ddd;
          padding: 3rem 0 1.5rem;
          margin-top: auto;
        }
        
        .footer-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .footer-brand h3 {
          font-family: 'Times New Roman', serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 0.5rem 0;
        }
        
        .footer-brand p {
          font-family: 'Georgia', serif;
          font-size: 0.9rem;
          color: #999;
          margin: 0;
          font-style: italic;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin: 2.5rem 0;
        }
        
        .link-column h4 {
          font-family: 'Times New Roman', serif;
          font-size: 1rem;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 1rem 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .link-column a {
          display: block;
          font-family: 'Georgia', serif;
          font-size: 0.9rem;
          color: #999;
          margin-bottom: 0.75rem;
        }
        
        .link-column a:hover {
          color: var(--white);
        }
        
        .footer-legal {
          border-top: 1px solid #444;
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .legal-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .legal-links a {
          font-family: 'Arial', sans-serif;
          font-size: 0.8rem;
          color: #999;
        }
        
        .copyright {
          font-family: 'Arial', sans-serif;
          font-size: 0.8rem;
          color: #999;
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }
          
          .secondary-column {
            grid-column: span 2;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          
          .hero-container {
            flex-direction: column;
          }
          
          .hero-image {
            order: -1;
            height: 350px;
          }
          
          .image-overlay {
            background: linear-gradient(to bottom, rgba(240,237,232,1) 0%, rgba(240,237,232,0) 50%);
          }
          
          .category-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .main-nav {
            order: 1;
            width: 100%;
            justify-content: center;
          }
          
          .header-actions {
            margin-top: 0.5rem;
          }
          
          .hero-headline {
            font-size: 2rem;
          }
          
          .grid-container {
            grid-template-columns: 1fr;
          }
          
          .secondary-column {
            grid-column: span 1;
            grid-template-columns: 1fr;
          }
          
          .spotlight-content {
            flex-direction: column;
          }
          
          .spotlight-image {
            width: 100%;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .category-container {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 480px) {
          .primary-article {
            flex-direction: column;
          }
          
          .primary-article .article-image {
            width: 100%;
            height: 200px;
            margin-bottom: 1rem;
          }
          
          .hero-headline {
            font-size: 1.8rem;
          }
          
          .hero-excerpt {
            font-size: 1rem;
          }
          
          .footer-links {
            grid-template-columns: 1fr;
          }
          
          .footer-legal {
            flex-direction: column;
          }
          
          .legal-links {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsAppHome;