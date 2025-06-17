
 import { useState } from "react";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "New Curriculum Sparks Debate in Secondary Schools",
      author: "Alice Mugisha",
      date: "June 2, 2025",
      category: "Education",
      image: "https://rightforeducation.org/wp-content/uploads/2022/10/quality-education.png",
      excerpt: "The Ministry of Education has introduced a competency-based curriculum aimed at promoting critical thinking and practical skills among learners.",
      content: "The new curriculum represents a significant shift from the traditional knowledge-based approach to a more practical, skills-oriented system. Education experts are divided, with some praising the move as long overdue while others warn of implementation challenges. The changes will affect all secondary schools starting next term, with teachers undergoing special training sessions throughout the summer."
    },
    {
      id: 2,
      title: "Parliament Passes Bill on Local Government Reform",
      author: "John Mugisha.",
      date: "June 1, 2025",
      category: "Politics",
      image: "https://sunrise.ug/wp-content/uploads/2017/12/Parliament-2.jpg",
      excerpt: "In a heated session, Parliament voted to pass the Local Government Reform Bill, which aims to decentralize more decision-making powers.",
      content: "The controversial bill passed with a 65% majority after eight hours of debate. The legislation grants district councils increased budgetary autonomy and authority over local infrastructure projects. Opposition members expressed concerns about potential mismanagement, while supporters argue it will bring government closer to the people. The President is expected to sign the bill into law next week."
    },
    {
      id: 3,
      title: "Uganda Cranes Triumph Over Kenya in Friendly Match",
      author: "Sarah Tumusiime",
      date: "May 30, 2025",
      category: "Sports",
      image: "https://www.fufa.co.ug/wp-content/uploads/2017/07/IMG_1514-scaled.jpg",
      excerpt: "The Uganda Cranes delivered a strong performance with a 3-1 win over Kenya at Mandela National Stadium.",
      content: "In front of a capacity crowd of 45,000, the Cranes dominated from the start with two first-half goals from striker Patrick Kaddu. Kenya pulled one back in the 67th minute, but Uganda sealed the victory with a late penalty. Coach Milutin Sredojević praised his team's discipline and called it perfect preparation for upcoming World Cup qualifiers. The match also saw the debut of two new young players from the U-20 squad."
    },
    {
      id: 4,
      title: "Experts Warn of Rising Malaria Cases in Rural Areas",
      author: "Dr. Peter Mugisha.",
      date: "May 29, 2025",
      category: "Health",
      image: "https://i0.wp.com/uniph.go.ug/wp-content/uploads/2021/08/Malaria-Breeading-place-due-to-Man-economic-activity.jpg?fit=780%2C380&ssl=1",
      excerpt: "Health officials are urging communities to increase mosquito net usage and seek early treatment as malaria cases spike.",
      content: "The Ministry of Health reports a 40% increase in malaria cases compared to this time last year, particularly in northern and eastern regions. Heavy rains and flooding have created ideal breeding conditions for mosquitoes. Dr. Mwesigwa emphasized that while treated nets remain effective, changing mosquito behavior requires additional measures like indoor spraying. Free testing and treatment are available at all government health centers."
    },
    {
      id: 5,
      title: "Tech Startups Flourish in Kampala Innovation Hub",
      author: "Mark Mugisha.",
      date: "May 28, 2025",
      category: "Technology",
      image: "https://pnptc-media.s3.amazonaws.com/images/modern_greenhouses.width-800.jpg",
      excerpt: "Young entrepreneurs are developing solutions to local challenges through the city's growing tech ecosystem.",
      content: "The Kampala Innovation Hub has incubated 15 new startups this quarter alone, focusing on agriculture, finance, and logistics. Notable successes include a mobile app connecting small farmers to markets and a fintech platform reducing cross-border payment costs. With venture capital interest growing, experts predict Uganda could become East Africa's next tech hotspot. The government plans tax incentives to further stimulate the sector."
    },
    {
      id: 6,
      title: "Cultural Festival Celebrates Uganda's Diverse Heritage",
      author: "Grace Mugisha.",
      date: "May 27, 2025",
      category: "Culture",
      image: "https://tahfeeztoursandtravel.com/wp-content/uploads/2023/05/featrued-scaled.jpg",
      excerpt: "Thousands gathered at the National Theatre for the annual festival showcasing traditional music, dance, and crafts.",
      content: "The week-long event featured performances from all regions of Uganda, including rarely seen rituals from remote communities. Highlights included the energetic Banyankole dance troupes and intricate barkcloth demonstrations. Organizers noted increased international attendance this year, boosting cultural tourism. Plans are underway to expand next year's festival to include more interactive workshops and children's programs."
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...new Set(articles.map(article => article.category))];

  return (
    <div id="articles-page">
      <div className="page-header">
        <div className="page-content">
          <h1 className="page-title">Insightful Articles always.</h1>
          <p className="page-subtitle">Stay informed with our collection of professionally curated articles across various sectors that are totally needed.</p>
        </div>
      </div>

      <div className="articles-controls">
        <div className="search-box">
          <i className="search-icon">🔍</i>
          <input 
            type="text" 
            placeholder="Search articles by title, excerpt or author..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-options">
          <label htmlFor="category-filter">Filter by:</label>
          <select 
            id="category-filter"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="results-count">
        Showing {filteredArticles.length} of {articles.length} articles
      </div>

      <div id="articles-grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map(article => (
            <article key={article.id} className="news-article">
              <div className="article-image-container">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="article-image" 
                />
                <span className="category-badge">{article.category}</span>
              </div>
              <div className="article-content">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-meta">
                  <span className="author">By {article.author}</span> 
                  <span className="separator">|</span>
                  <span className="date">{article.date}</span>
                </p>
                <p className="article-text">{article.excerpt}</p>
                <div className="article-footer">
                  <a href={`/article/${article.id}`} className="read-more">
                    Continue Reading
                    <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <div className="no-results-icon">😕</div>
            <h3>No articles found</h3>
            <p>Try adjusting your search or filter criteria</p>
            <button 
              className="reset-btn"
              onClick={() => {
                setSearchTerm("");
                setFilterCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <div className="newsletter-cta">
        <h3>Never Miss an Update</h3>
        <p>Subscribe to our weekly newsletter for the latest articles delivered to your inbox</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* CSS STARTS FROM HERE */}
      <style>{`
        /* Base Styles */
        :root {
          --primary-color: #2c3e50;
          --secondary-color: #3498db;
          --accent-color: #e74c3c;
          --light-color: #ecf0f1;
          --dark-color: #2c3e50;
          --gray-color: #95a5a6;
          --text-color: #333;
          --text-light: #7f8c8d;
          --border-radius: 4px;
          --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          --transition: all 0.3s ease;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: var(--text-color);
          background-color: #f9f9f9;
        }

        /* Page Structure */
        #articles-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .page-header {
          background: linear-gradient(135deg, var(--primary-color), var(--dark-color));
          color: white;
          padding: 3rem 0;
          margin-bottom: 2rem;
          border-radius: 0 0 var(--border-radius) var(--border-radius);
          text-align: center;
        }

        .page-title {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .page-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 700px;
          margin: 0 auto;
        }

        /* Controls */
        .articles-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .search-box {
          position: relative;
          flex: 1;
          min-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gray-color);
        }

        .search-box input {
          width: 100%;
          padding: 12px 20px 12px 45px;
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
          font-size: 1rem;
          transition: var(--transition);
        }

        .search-box input:focus {
          outline: none;
          border-color: var(--secondary-color);
          box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
        }

        .filter-options {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .filter-options label {
          font-weight: 500;
          color: var(--text-light);
        }

        .filter-options select {
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: var(--border-radius);
          background-color: white;
          cursor: pointer;
          transition: var(--transition);
        }

        .filter-options select:focus {
          outline: none;
          border-color: var(--secondary-color);
        }

        .results-count {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
        }

        /* Articles Grid */
        #articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .news-article {
          background: white;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--box-shadow);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }

        .news-article:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
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
          transition: var(--transition);
        }

        .news-article:hover .article-image {
          transform: scale(1.05);
        }

        .category-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background-color: var(--secondary-color);
          color: white;
          padding: 5px 10px;
          border-radius: var(--border-radius);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .article-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .article-title {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          color: var(--dark-color);
          font-weight: 600;
        }

        .article-meta {
          color: var(--text-light);
          font-size: 0.85rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .separator {
          opacity: 0.5;
        }

        .article-text {
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .article-footer {
          margin-top: auto;
        }

        .read-more {
          color: var(--secondary-color);
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: var(--transition);
        }

        .read-more:hover {
          color: var(--primary-color);
        }

        .arrow {
          margin-left: 5px;
          transition: var(--transition);
        }

        .read-more:hover .arrow {
          transform: translateX(3px);
        }

        /* No Results */
        .no-results {
          text-align: center;
          grid-column: 1 / -1;
          padding: 3rem 0;
        }

        .no-results-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .no-results h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--dark-color);
        }

        .no-results p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        .reset-btn {
          background: var(--secondary-color);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: var(--border-radius);
          cursor: pointer;
          font-weight: 600;
          transition: var(--transition);
        }

        .reset-btn:hover {
          background: var(--primary-color);
        }

        /* Newsletter CTA */
        .newsletter-cta {
          background: var(--light-color);
          padding: 2.5rem;
          border-radius: var(--border-radius);
          text-align: center;
          margin-bottom: 3rem;
        }

        .newsletter-cta h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--dark-color);
        }

        .newsletter-cta p {
          color: var(--text-light);
          max-width: 600px;
          margin: 0 auto 1.5rem;
        }

        .newsletter-form {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-form input {
          flex: 1;
          padding: 12px 15px;
          border: 1px solid #ddd;
          border-radius: var(--border-radius) 0 0 var(--border-radius);
          font-size: 1rem;
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: var(--secondary-color);
        }

        .newsletter-form button {
          background: var(--accent-color);
          color: white;
          border: none;
          padding: 0 20px;
          border-radius: 0 var(--border-radius) var(--border-radius) 0;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .newsletter-form button:hover {
          background: #c0392b;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .articles-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search-box {
            min-width: 100%;
          }
          
          #articles-grid {
            grid-template-columns: 1fr;
          }
          
          .page-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .newsletter-form {
            flex-direction: column;
          }
          
          .newsletter-form input,
          .newsletter-form button {
            width: 100%;
            border-radius: var(--border-radius);
          }
          
          .newsletter-form button {
            margin-top: 10px;
            padding: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Articles;