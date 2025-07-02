
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Podcast, Search, Bell, MessageCircle, Home, User } from "lucide-react";
import { Link } from "react-router-dom";

export const AuthNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 w-10 h-10 rounded-lg flex items-center justify-center" style={{background: '#663090'}}>
              <Podcast className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FindACoHost</span>
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/dashboard" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link to="/browse" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5" />
              <span>Browse</span>
            </Link>
            <Link to="/messages" className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>Messages</span>
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Button>
            
            <Link to="/profile">
              <Avatar className="w-10 h-10 border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" alt="User" />
                <AvatarFallback className="bg-purple-100 text-purple-700">
                  <User className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
