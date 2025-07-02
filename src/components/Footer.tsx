
import { Podcast, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: '#663090'}}>
                <Podcast className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">FindACoHost</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting podcast hosts with amazing guests to create compelling content together.
            </p>
            <div className="flex space-x-4 mt-6">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* For Hosts */}
          <div>
            <h3 className="font-semibold mb-4">For Hosts</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Browse Guests</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Host Resources</a></li>
            </ul>
          </div>

          {/* For Guests */}
          <div>
            <h3 className="font-semibold mb-4">For Guests</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Sign Up as Guest</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Guest Guidelines</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Featured Guests</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Guest Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 FindACoHost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
