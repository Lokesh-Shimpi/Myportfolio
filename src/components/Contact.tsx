import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const subtleEasing = [0.25, 0.1, 0.25, 1] as const;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };



  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'luckyshimpi2004@gmail.com',
      href: 'mailto:luckyshimpi2004@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8767160821',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jalgaon, Maharashtra, India',
      href: 'https://maps.google.com'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: subtleEasing }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to work together? Let's discuss your project and bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: subtleEasing }}
          >
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl p-8 transition-all duration-300 hover:border-slate-700/50 hover:shadow-xl hover:shadow-black/50">
              <h3 className="text-2xl font-bold text-slate-100 mb-6 tracking-tight">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`w-full py-3.5 rounded-lg font-semibold text-slate-50 transition-all duration-300 flex items-center justify-center gap-2 ${submitStatus === 'success'
                    ? 'bg-emerald-600 hover:bg-emerald-500'
                    : isSubmitting
                      ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      : 'bg-cyan-600 hover:brightness-110 shadow-lg shadow-cyan-900/20'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    'Message Sent!'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: subtleEasing }}
            className="space-y-6"
          >
            {/* Contact Information */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl p-8 transition-all duration-300 hover:border-slate-700/50 hover:shadow-xl hover:shadow-black/50">
              <h3 className="text-2xl font-bold text-slate-100 mb-6 tracking-tight">Contact Information</h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 3 }}
                    className="flex items-center p-4 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-all group"
                  >
                    <div className="p-3 bg-slate-900 rounded-lg mr-4 border border-slate-700 group-hover:border-cyan-500/50 transition-colors">
                      <info.icon size={20} className="text-cyan-500" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-0.5">{info.label}</p>
                      <p className="text-slate-200 font-medium group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>



            {/* Availability Status */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800/50 rounded-2xl p-6 transition-all duration-300 hover:border-slate-700/50 hover:shadow-xl hover:shadow-black/50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-semibold text-slate-100 mb-1 tracking-tight">Availability Status</h4>
                  <p className="text-slate-400 text-sm">Currently available for new projects</p>
                </div>
                <div className="flex items-center px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-2" />
                  <span className="text-emerald-400 font-medium text-sm">Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;