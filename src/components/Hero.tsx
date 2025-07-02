import { Button } from "@/components/ui/button";
import { Mic, Users, Podcast } from "lucide-react";

export const Hero = () => {
  return (
    <div
      className="relative overflow-hidden min-h-[600px]"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=800&fit=crop)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#663090]/50 to-black/70"></div>
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
              <Podcast className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Find Your Perfect
            <span className="bg-gradient-to-r from-yellow-400 to-purple-300 bg-clip-text text-transparent">
              {" "}
              Co-Host
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Connect with passionate podcasters, share your expertise, and create
            amazing content together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-white hover:opacity-90 text-lg px-8 py-6"
              style={{ backgroundColor: "#663090" }}
            >
              <Users className="w-5 h-5 mr-2" />
              Find Co-Hosts
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
