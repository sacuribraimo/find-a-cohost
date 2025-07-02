import { Button } from "@/components/ui/button";
import { Mic, Users, ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <div
      className="py-20"
      style={{
        background:
          "linear-gradient(135deg, #663090 0%, #8B5A96 50%, #B388A3 100%)",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your
          <span className="bg-gradient-to-r from-yellow-400 to-purple-300 bg-clip-text text-transparent">
            {" "}
            Podcast Journey?
          </span>
        </h2>
        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Join thousands of podcasters who have found their perfect co-hosts and
          created amazing content together
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="text-white hover:opacity-90 text-lg px-8 py-6"
            style={{ backgroundColor: "#663090" }}
          >
            <Users className="w-5 h-5 mr-2" />
            Sign Up
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
        <div className="mt-12 text-purple-200 text-sm">
          No commitment required • Free to browse • Secure messaging
        </div>
      </div>
    </div>
  );
};
