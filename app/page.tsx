"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Menu, X, Send, MessageCircle } from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const primaryColor = "{{ $json['Primary Color'] || '#3b82f6' }}";
  const secondaryColor = "{{ $json['Secondary Color'] || '#1e293b' }}";
  const features = "{{ $json['Features'] }}";
  const contactNumber = "{{ $json['Contact Number (WhatsApp)'] }}";
  const businessName = "{{ $json['Business Name'] }}";
  const description = "{{ $json['Description'] }}";

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email, message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav className="flex justify-between items-center py-4 sticky top-0 bg-white" style={{ borderBottom: `1px solid ${secondaryColor}` }}>
        <div className="flex items-center">
          <span style={{ color: primaryColor, fontSize: '24px', fontWeight: 'bold' }}>{businessName}</span>
        </div>
        <div className="hidden md:flex items-center">
          <a href="#features" className="mr-6">Features</a>
          <a href="#contact" className="mr-6">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center absolute top-14 right-0 bg-white p-4 border border-gray-200">
          <a href="#features" className="mb-4">Features</a>
          <a href="#contact" className="mb-4">Contact</a>
        </div>
      )}
      <section className="h-screen flex justify-center items-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1920x1080/?business,technology)', backgroundSize: 'cover' }}>
        <div className="text-center">
          <h1 className="text-5xl mb-4" style={{ color: primaryColor }}>{businessName}</h1>
          <p className="text-2xl mb-8" style={{ color: secondaryColor }}>{description}</p>
          <a href={`https://wa.me/${contactNumber}`} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: primaryColor, border: `1px solid ${primaryColor}` }}>
            <Phone size={20} className="mr-2" /> WhatsApp
          </a>
        </div>
      </section>
      <section id="features" className="py-20">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl mb-8" style={{ color: primaryColor }}>Features</h2>
          <div className="flex flex-wrap -mx-4">
            {features.split(',').map((feature, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white p-6 rounded" style={{ boxShadow: `0 0 10px ${secondaryColor}` }}>
                  <h3 className="text-2xl mb-4" style={{ color: primaryColor }}>{feature.trim()}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto p-4">
          <h2 className="text-4xl mb-8" style={{ color: primaryColor }}>Get in Touch</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white p-6 rounded" style={{ boxShadow: `0 0 10px ${secondaryColor}` }}>
                <h3 className="text-2xl mb-4" style={{ color: primaryColor }}>Contact Information</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
                <ul>
                  <li className="mb-4"><MapPin size={20} className="mr-2" /> 123 Main St, Anytown, USA</li>
                  <li className="mb-4"><Phone size={20} className="mr-2" /> {contactNumber}</li>
                  <li className="mb-4"><Mail size={20} className="mr-2" /> <a href="mailto:info@example.com">info@example.com</a></li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/3 p-4">
              <div className="bg-white p-6 rounded" style={{ boxShadow: `0 0 10px ${secondaryColor}` }}>
                <h3 className="text-2xl mb-4" style={{ color: primaryColor }}>Send a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" style={{ backgroundColor: primaryColor, border: `1px solid ${primaryColor}` }}>
                    <Send size={20} className="mr-2" /> Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8" style={{ backgroundColor: secondaryColor, color: 'white' }}>
        <div className="container mx-auto p-4">
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <p>
            <MessageCircle size={20} className="mr-2" /> 
            <a href="https://www.unsplash.com/" target="_blank" rel="noreferrer" style={{ color: 'white' }}>Unsplash</a> 
            for background images.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;