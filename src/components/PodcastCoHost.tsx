
import { Mic, Users, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PodcastCoHost = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
              <Mic className="w-4 h-4" />
              Perfect Partnership
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Podcast Co-Host
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Connect with passionate creators who share your vision. Build chemistry, 
              create engaging content, and grow your audience together with the perfect co-host match.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="w-5 h-5 text-purple-600" />
                <span>500+ Active Co-Hosts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>4.9/5 Success Rate</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Play className="w-5 h-5 mr-2" />
                Start Your Search
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                Browse Co-Hosts
              </Button>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=400&fit=crop" 
                alt="People collaborating on podcast"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah & Mike</h4>
                    <p className="text-sm text-gray-600">Tech Talk Podcast</p>
                  </div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 italic">
                    "Found my perfect co-host in just 2 weeks! Our chemistry is amazing 
                    and our downloads have tripled since we started working together."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-pink-500 rounded-full p-3 shadow-lg">
              <Play className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
