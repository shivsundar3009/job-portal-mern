import React from "react";
import { ReactTyped  } from "react-typed";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-blue-600">JobPortal</h1>
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
            <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">Welcome to JobPortal</h2>
          <p className="text-lg mb-8">
            Your gateway to finding the best jobs and hiring the right talent.
          </p>
          <div className="text-xl font-semibold">
            <ReactTyped
              strings={["Work in Progress...", "Launching Soon!"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Features</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4">Job Search</h4>
              <p>Find the best jobs tailored to your skills and preferences.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4">Resume Builder</h4>
              <p>Create and manage your resumes with our intuitive tools.</p>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <h4 className="text-xl font-semibold mb-4">Recruiter Access</h4>
              <p>Reach out to top talent and manage applications seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">About Us</h3>
          <p>
            At JobPortal, our mission is to bridge the gap between talent and
            opportunity. Stay tuned as we build something amazing!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
