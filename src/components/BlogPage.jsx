import { motion } from 'framer-motion';
import { BookOpen, ChevronRight } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'Walking in Faith: A Journey of Trust',
      excerpt: 'Discover how to deepen your faith and trust in God through life\'s challenges...',
      date: 'October 15, 2025',
      author: 'Pastor John',
      category: 'Faith',
      image: 'from-blue-500 to-purple-500'
    },
    {
      title: 'The Power of Prayer in Difficult Times',
      excerpt: 'Learn how prayer can transform your circumstances and bring peace...',
      date: 'October 10, 2025',
      author: 'Minister Sarah',
      category: 'Prayer',
      image: 'from-green-500 to-teal-500'
    },
    {
      title: 'Building Strong Christian Families',
      excerpt: 'Practical tips for nurturing faith and love in your household...',
      date: 'October 5, 2025',
      author: 'Pastor Michael',
      category: 'Family',
      image: 'from-pink-500 to-red-500'
    },
    {
      title: 'Living a Purpose-Driven Life',
      excerpt: 'Understanding and walking in your God-given purpose...',
      date: 'September 28, 2025',
      author: 'Minister Grace',
      category: 'Purpose',
      image: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'The Joy of Giving and Service',
      excerpt: 'How serving others enriches our spiritual journey...',
      date: 'September 20, 2025',
      author: 'Pastor John',
      category: 'Service',
      image: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Overcoming Fear with Faith',
      excerpt: 'Biblical strategies for conquering fear and anxiety...',
      date: 'September 15, 2025',
      author: 'Minister David',
      category: 'Encouragement',
      image: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="space-y-8">
      
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h2>
        <p className="text-gray-600 text-lg">Inspiration, teaching, and encouragement</p>
      </motion.div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
          >
            {/* Post Image/Icon */}
            <div className={`h-48 bg-gradient-to-br ${post.image} flex items-center justify-center`}>
              <BookOpen className="text-white" size={64} />
            </div>

            {/* Post Content */}
            <div className="p-6">
              {/* Category and Date */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

              {/* Author and Read More */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">By {post.author}</span>
                <button className="text-blue-600 font-semibold text-sm flex items-center hover:text-blue-700 transition-colors">
                  Read More <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;