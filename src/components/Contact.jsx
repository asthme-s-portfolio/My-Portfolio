import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, Clock, ArrowRight } from 'lucide-react';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'asthmekaasa@gmail.com',
      link: 'mailto:asthmekaasa@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+256 744 542 446',
      link: 'tel:+256744542446'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kampala, Uganda',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Asthme256/ ', label: 'GitHub' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/kaasa-asthme-4b335634b/', label: 'LinkedIn' },
    // { icon: Twitter, link: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-purple-600">
            Let's Work Together
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? I would love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-purple-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="text-white" size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{info.title}</h3>
                    <p className="text-gray-800 font-medium">{info.value}</p>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" size={20} />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Available for Work</h3>
                  <p className="text-purple-100">
                    Open to freelance projects and full-time opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">Responding within 24 hours</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg border-2 border-gray-300 flex items-center justify-center hover:border-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 group"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">Message Sent!</h3>
                  <p className="text-gray-600 text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Send a Message</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and I'll respond shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.name 
                            ? 'border-red-500' 
                            : focusedField === 'name' 
                            ? 'border-purple-600' 
                            : 'border-gray-200'
                        } focus:outline-none transition-all`}
                        placeholder=""
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                          <span className="font-semibold">!</span> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.email 
                            ? 'border-red-500' 
                            : focusedField === 'email' 
                            ? 'border-purple-600' 
                            : 'border-gray-200'
                        } focus:outline-none transition-all`}
                        placeholder=""
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                          <span className="font-semibold">!</span> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          focusedField === 'subject' ? 'border-purple-600' : 'border-gray-200'
                        } focus:outline-none transition-all`}
                        placeholder=""
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border-2 ${
                          errors.message 
                            ? 'border-red-500' 
                            : focusedField === 'message' 
                            ? 'border-purple-600' 
                            : 'border-gray-200'
                        } focus:outline-none transition-all resize-none`}
                        placeholder=""
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                          <span className="font-semibold">!</span> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-purple-700 hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin inline-block mr-2" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={20} className="inline-block group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;