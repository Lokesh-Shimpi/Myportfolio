import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const subtleEasing = [0.25, 0.1, 0.25, 1] as const;

  const blogPosts = [
    {
      title: 'Digital India: Transforming a Nation with Technology',
      excerpt: 'When someone asks, “What makes you proud about India in the 21st century?” — one answer comes quickly: Digital India.',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Cou-sRFW0uf_RYZglD1YCg.png',
      category: 'Information',
      readTime: '2 min read',
      publishDate: 'Aug 15 2025',
      featured: true,
      link: 'https://lokeshshimpi.medium.com'
    },
    {
      title: 'What is Node.js? A Beginner-Friendly Guide for Indian Developers',
      excerpt: 'When you start learning web development in India, you’ll often hear this line: "Frontend seekh liya? Ab Node.js bhi kar, full stack ban jayega!"',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*QEB8u-c2r3eY9xb0o-FYiQ.png',
      category: 'Node.js',
      readTime: '2 min read',
      publishDate: 'Aug 14 2025',
      featured: false,
      link: 'https://lokeshshimpi.medium.com'
    },
    {
      title: 'What is React.js? A Beginner-Friendly Guide for Indian Developers',
      excerpt: 'If you’ve been exploring web development in India, you must have heard people saying: "React seekh le yaar, naukri mil jayegi!" And honestly… they’re not wrong.',
      image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*J_PDUG6ulcwavN2ZL9SIag.png',
      category: 'React',
      readTime: '2 min read',
      publishDate: 'Aug 14 2025',
      featured: false,
      link: 'https://lokeshshimpi.medium.com'
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: subtleEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">
            Latest Blog Posts
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Sharing insights, tutorials, and experiences from my journey in web development and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: subtleEasing }}
              className={`group relative flex flex-col bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 hover:border-slate-700/50 cursor-pointer ${post.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
            >
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
                <span className="sr-only">Read {post.title}</span>
              </a>

              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-cyan-600 rounded-full text-slate-50 text-xs font-semibold shadow-lg">
                  Featured
                </div>
              )}

              {/* Image */}
              <div className="relative overflow-hidden h-48 sm:h-56">
                <div className="absolute inset-0 bg-slate-900 z-0"></div>
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-20"></div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4 z-30">
                  <span className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/90 border border-slate-700 rounded-full backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1.5" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1.5" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-400 transition-colors tracking-tight leading-snug">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Read More Button (Visual Only, the whole card is clickable) */}
                <div className="mt-auto pt-4 border-t border-slate-800/50 flex flex-row justify-end text-cyan-500 font-medium text-sm group-hover:text-cyan-400 transition-colors z-30pointer-events-none">
                  <span className="flex items-center">
                    Read Post
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: subtleEasing }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://lokeshshimpi.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 bg-cyan-600 rounded-lg font-semibold text-slate-50 hover:brightness-110 transition-all inline-flex items-center gap-2 group shadow-lg shadow-cyan-900/20"
          >
            Read All Articles
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;