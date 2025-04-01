import React, { useState, useEffect } from 'react';
import './BlogPage.css';

// Sample blog data - in a real app, you would fetch this from an API
const sampleBlogPosts = [
  {
    id: 1,
    title: "10 Sustainable Farming Practices Every Farmer Should Know",
    excerpt: "Discover how sustainable farming practices can improve your yields while protecting the environment for future generations.",
    content: "Sustainable farming is becoming increasingly important as we face challenges like climate change and resource depletion. This article explores ten practices that can help farmers maintain productivity while minimizing environmental impact...",
    author: "Maria Kimani",
    date: "March 25, 2025",
    category: "Sustainable Farming",
    image: "/api/placeholder/600/400",
    tags: ["sustainable", "organic", "eco-friendly"]
  },
  {
    id: 2,
    title: "How Digital Tools Are Transforming Small-Scale Agriculture",
    excerpt: "From mobile apps to IoT devices, technology is making farming more efficient and profitable for small-scale farmers across Africa.",
    content: "The digital revolution has finally reached small-scale agriculture. Farmers who once relied solely on traditional knowledge are now embracing technology to improve decision-making and increase profits...",
    author: "Daniel Ochieng",
    date: "March 18, 2025",
    category: "AgTech",
    image: "/api/placeholder/600/400",
    tags: ["technology", "digital", "small-scale"]
  },
  {
    id: 3,
    title: "Market Trends: What to Plant in 2025 for Maximum Profit",
    excerpt: "Our agricultural market analysis predicts the crops that will see highest demand and best prices in the coming seasons.",
    content: "Making informed decisions about what to plant can significantly impact your farm's profitability. This article analyzes current market trends and provides insights into which crops might yield the best returns in 2025...",
    author: "Sarah Mwangi",
    date: "March 10, 2025",
    category: "Market Analysis",
    image: "/api/placeholder/600/400",
    tags: ["market", "crops", "profit"]
  },
  {
    id: 4,
    title: "Expert Guide: Managing Water Resources During Drought Seasons",
    excerpt: "Learn effective water conservation strategies that can help your farm survive and thrive during periods of water scarcity.",
    content: "Water scarcity is a growing concern for farmers across many regions. This comprehensive guide offers practical solutions for water management that can help maintain productivity even during drought conditions...",
    author: "Samuel Ndegwa",
    date: "March 5, 2025",
    category: "Water Management",
    image: "/api/placeholder/600/400",
    tags: ["water", "drought", "conservation"]
  }
];

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredPost, setFeaturedPost] = useState(null);
  
  // Get unique categories
  const categories = ['All', ...new Set(sampleBlogPosts.map(post => post.category))];
  
  // Simulate fetching posts from an API
  useEffect(() => {
    // In a real app, this would be an API call
    setPosts(sampleBlogPosts);
    setFeaturedPost(sampleBlogPosts[0]);
  }, []);
  
  // Filter posts based on category and search term
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="blog-page-container">
      <div className="blog-header">
        <h1>Sifarm Blog</h1>
        <p className="tagline">Insights, tips, and news for the modern farmer</p>
      </div>
      
      {featuredPost && (
        <div className="featured-post">
          <div className="featured-image">
            <img src={featuredPost.image} alt={featuredPost.title} />
          </div>
          <div className="featured-content">
            <span className="featured-label">Featured Article</span>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className="post-meta">
              <span className="post-author">By {featuredPost.author}</span>
              <span className="post-date">{featuredPost.date}</span>
              <span className="post-category">{featuredPost.category}</span>
            </div>
            <button className="read-more-btn">Read Full Article</button>
          </div>
        </div>
      )}
      
      <div className="blog-controls">
        <div className="category-filter">
          {categories.map(category => (
            <button 
              key={category} 
              className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search articles..." 
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      
      <div className="blog-content">
        <div className="posts-grid">
          {filteredPosts.map(post => (
            <div key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="post-details">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-category">{post.category}</span>
                </div>
                <div className="post-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="read-more-btn">Read More</button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
          <div className="no-posts">
            <h3>No articles found</h3>
            <p>Try changing your search terms or category filter.</p>
          </div>
        )}
      </div>
      
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Stay Updated with the Latest Agricultural Insights</h2>
          <p>Subscribe to our newsletter to receive farming tips, market updates, and technology news directly in your inbox.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
          <p className="privacy-note">We respect your privacy and will never share your information.</p>
        </div>
      </div>
      
      <div className="blog-cta-section">
        <h2>Ready to transform your agricultural business?</h2>
        <p>Join thousands of farmers and vendors already using Sifarm to grow their operations.</p>
        <div className="cta-buttons">
          <button className="cta-button primary">Sign Up as a Farmer</button>
          <button className="cta-button secondary">Sign Up as a Vendor</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;