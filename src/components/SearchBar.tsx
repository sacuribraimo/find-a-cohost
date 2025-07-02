
import { Search, Filter, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const SearchBar = () => {
  const topics = ["Technology", "Business", "Health", "Comedy", "News", "Sports", "Education"];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-purple-100">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input 
            placeholder="Search by expertise, topic, or name..." 
            className="pl-10 py-6 text-lg border-purple-200 focus:border-purple-400"
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <Input 
            placeholder="Location (optional)" 
            className="pl-10 py-6 text-lg border-purple-200 focus:border-purple-400 md:w-64"
          />
        </div>
        <Button size="lg" className="text-white hover:opacity-90 px-8" style={{backgroundColor: '#663090'}}>
          <Filter className="w-5 h-5 mr-2" />
          Search
        </Button>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-gray-600 mr-2">Popular topics:</span>
        {topics.map((topic) => (
          <Badge key={topic} variant="secondary" className="cursor-pointer hover:bg-purple-100 hover:text-purple-700">
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  );
};
