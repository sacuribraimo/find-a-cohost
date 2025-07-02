import { Button } from "@/components/ui/button";
import { Podcast, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div
              className="bg-gradient-to-r from-purple-600 to-purple-800 w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ background: "#663090" }}
            >
              <Podcast className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FindACoHost</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link
                to="/about"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                About
              </Link>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Pricing
              </a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                asChild
                variant="outline"
                className="border-purple-200 text-purple-600 hover:bg-purple-50"
              >
                <Link to="/signin">Sign In</Link>
              </Button>
              <Button
                className="text-white hover:opacity-90"
                style={{ backgroundColor: "#663090" }}
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/about"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                About
              </Link>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#browse-hosts"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Browse Hosts
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#pricing"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-200 text-purple-600 hover:bg-purple-50"
                >
                  <Link to="/signin">Sign In</Link>
                </Button>
                <Button
                  className="text-white hover:opacity-90"
                  style={{ backgroundColor: "#663090" }}
                >
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
