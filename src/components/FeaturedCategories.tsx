
import { Briefcase, Heart, Zap, Gamepad2, Newspaper, Trophy, GraduationCap, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturedCategories = () => {
  const categories = [
    {
      icon: Briefcase,
      name: "Business & Entrepreneurship",
      count: "450+ hosts",
      description: "Connect with business leaders and startup founders",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      name: "Technology & Innovation",
      count: "320+ hosts",
      description: "Discuss the latest in tech and digital transformation",
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      name: "Health & Wellness",
      count: "280+ hosts",
      description: "Share insights on mental and physical wellbeing",
      color: "bg-green-500"
    },
    {
      icon: Gamepad2,
      name: "Entertainment & Comedy",
      count: "200+ hosts",
      description: "Bring humor and entertainment to audiences",
      color: "bg-yellow-500"
    },
    {
      icon: Newspaper,
      name: "News & Current Events",
      count: "180+ hosts",
      description: "Analyze and discuss today's important topics",
      color: "bg-red-500"
    },
    {
      icon: Trophy,
      name: "Sports & Fitness",
      count: "150+ hosts",
      description: "Talk athletics, training, and competitive sports",
      color: "bg-orange-500"
    },
    {
      icon: GraduationCap,
      name: "Education & Learning",
      count: "220+ hosts",
      description: "Share knowledge and educational insights",
      color: "bg-indigo-500"
    },
    {
      icon: Mic,
      name: "Arts & Culture",
      count: "160+ hosts",
      description: "Explore creativity, music, and cultural topics",
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Categories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect match in your area of expertise or interest
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-purple-600 font-medium mb-2">{category.count}</p>
                <p className="text-sm text-gray-600">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
