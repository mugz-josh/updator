import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiSearch, FiExternalLink, FiCalendar, FiFileText } from 'react-icons/fi';
import { RotatingLines } from 'react-loader-spinner';

interface Article {
  title: string;
  url: string;
  description?: string;
  urlToImage?: string;
  publishedAt?: string;
  source?: {
    name: string;
  };
}

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('technology');
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  // IMPORTANT: In production, use environment variables
  const apiKey = '7f52a184cae2496aa3538f57217f970b'; // Replace with your actual key

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const fetchNews = async (query: string) => {
    if (!apiKey) {
      setError('News API key is not configured');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&apiKey=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error(response.status === 401 ? 'Invalid API key' : 'Failed to fetch news');
      }
      
      const data = await response.json();
      setNews(data.articles || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setSearchQuery(inputValue.trim());
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-purple-900/50 text-purple-300' : 'bg-blue-100 text-blue-800'}`}>
              <FiFileText className="text-2xl" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                News Explorer
              </h1>
              <p className={`mt-1 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Your trusted source for global news coverage
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isDarkMode 
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-100' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              } shadow-sm`}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-indigo-700" />}
              <span className="hidden sm:inline">{isDarkMode ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </header>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="mb-10">
          <div className="relative">
            <div className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <FiSearch />
            </div>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search topics (technology, business, sports)..."
              className={`w-full pl-12 pr-5 py-4 text-lg rounded-lg border focus:outline-none focus:ring-2 transition-all ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700 focus:border-purple-500 focus:ring-purple-900 text-white placeholder-gray-500' 
                  : 'bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-100 text-gray-900 placeholder-gray-400'
              } shadow-sm`}
              disabled={loading}
            />
            <button
              type="submit"
              className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 rounded-md font-medium transition-all ${
                isDarkMode 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } shadow-md flex items-center gap-2`}
              disabled={loading}
            >
              {loading ? (
                <RotatingLines width="20" strokeColor="#fff" />
              ) : (
                'Search'
              )}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {error && (
          <div className={`p-4 mb-8 rounded-lg border ${
            isDarkMode ? 'bg-red-900/30 border-red-800 text-red-100' : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <p className="font-medium flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Error fetching news
            </p>
            <p className="mt-1">{error}</p>
            {error.includes('API key') && (
              <p className="mt-2 text-sm opacity-80">
                Please check your NewsAPI configuration.
              </p>
            )}
          </div>
        )}

        {/* Results Count */}
        {!loading && !error && (
          <div className={`mb-8 px-2 flex items-center gap-2 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {news.length > 0 ? (
              <>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  isDarkMode ? 'bg-purple-900/50 text-purple-200' : 'bg-blue-100 text-blue-800'
                }`}>
                  {news.length} {news.length === 1 ? 'Article' : 'Articles'}
                </span>
                <span>for "{searchQuery}"</span>
              </>
            ) : inputValue ? (
              <p>No articles found for "{searchQuery}". Try a different search term.</p>
            ) : null}
          </div>
        )}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, idx) => (
            <article 
              key={idx} 
              className={`rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              } border`}
            >
              {article.urlToImage && (
                <div className="h-48 w-full relative overflow-hidden">
                  <img 
                    src={article.urlToImage} 
                    alt={article.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/400x200?text=${encodeURIComponent(article.title.substring(0, 30))}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className={`absolute bottom-0 left-0 p-4 w-full ${
                    isDarkMode ? 'text-gray-200' : 'text-white'
                  }`}>
                    <h2 className="font-bold text-lg leading-tight line-clamp-2">
                      {article.title}
                    </h2>
                  </div>
                </div>
              )}
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-3 gap-2">
                  {!article.urlToImage && (
                    <h2 className="text-xl font-bold leading-snug">
                      <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`hover:underline ${
                          isDarkMode ? 'text-white hover:text-purple-300' : 'text-gray-900 hover:text-blue-600'
                        }`}
                      >
                        {article.title}
                      </a>
                    </h2>
                  )}
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 -m-2 rounded-full ${
                      isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    } transition-colors`}
                    aria-label="Open article"
                  >
                    <FiExternalLink className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                  </a>
                </div>
                
                {article.description && (
                  <p className={`mb-4 line-clamp-3 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {article.description}
                  </p>
                )}
                
                <div className={`flex justify-between items-center text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {article.source?.name && (
                    <span className="flex items-center gap-1 font-medium">
                      <FiFileText className="opacity-70" size={14} />
                      {article.source.name}
                    </span>
                  )}
                  {article.publishedAt && (
                    <time 
                      dateTime={article.publishedAt}
                      className="flex items-center gap-1"
                    >
                      <FiCalendar className="opacity-70" size={14} />
                      {formatDate(article.publishedAt)}
                    </time>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <RotatingLines width="50" strokeColor={isDarkMode ? '#818cf8' : '#2563eb'} />
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Fetching the latest news...
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className={`mt-16 pt-8 border-t ${
          isDarkMode ? 'border-gray-800 text-gray-400' : 'border-gray-200 text-gray-500'
        } text-sm text-center`}>
          <p>News Explorer © {new Date().getFullYear()} - Powered by NewsAPI</p>
          <p className="mt-1">Stay informed with the most recent news updates worldwide in this current World.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;