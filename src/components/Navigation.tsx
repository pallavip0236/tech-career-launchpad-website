
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Clahan Technologies
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <div className="relative group">
                <button className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center">
                  Courses <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <a href="#devops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DevOps Training</a>
                    <a href="#devsecops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">DevSecOps Course</a>
                    <a href="#cloud" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cloud Computing</a>
                  </div>
                </div>
              </div>
              <a href="#about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Success Stories
              </a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium">
              Start Your Journey
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t mt-2">
              <a href="#home" className="text-gray-900 hover:text-blue-600 block px-4 py-2 text-base font-medium rounded-md">
                Home
              </a>
              <a href="#courses" className="text-gray-900 hover:text-blue-600 block px-4 py-2 text-base font-medium rounded-md">
                Courses
              </a>
              <a href="#about" className="text-gray-900 hover:text-blue-600 block px-4 py-2 text-base font-medium rounded-md">
                About
              </a>
              <a href="#testimonials" className="text-gray-900 hover:text-blue-600 block px-4 py-2 text-base font-medium rounded-md">
                Success Stories
              </a>
              <a href="#contact" className="text-gray-900 hover:text-blue-600 block px-4 py-2 text-base font-medium rounded-md">
                Contact
              </a>
              <div className="pt-4">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium">
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
