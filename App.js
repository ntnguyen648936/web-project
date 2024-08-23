import React from 'react';
import { Camera } from 'lucide-react';

const Header = () => (
  <header className="bg-gray-900 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">Du Thanh Duoc</div>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Courses</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white p-4 mt-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 Du Thanh Duoc. All rights reserved.</p>
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Mình là ai?</h1>
          <div className="flex flex-col md:flex-row items-center">
            <p className="md:w-2/3 mb-4 md:mb-0 md:mr-4">
              Mình là Du Thanh Duoc Developer, chuyên về các công nghệ JavaScript như React, Next.js, Node.js. Mình cũng rất thích chia sẻ kiến thức lập trình cho mọi người.
            </p>
            <img src="/api/placeholder/300/300" alt="Profile" className="rounded-full w-64 h-64 object-cover" />
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Tìm mình trên CafeBiz</h2>
          <div className="flex items-center space-x-4">
            <Camera size={24} />
            <span>Check out my articles on CafeBiz</span>
          </div>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-4">Khóa học của mình</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Next.js', 'Node.js Super', 'TypeScript'].map((course, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded">
                <h3 className="text-xl font-bold mb-2">{course}</h3>
                <p>Description of the {course} course goes here.</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;