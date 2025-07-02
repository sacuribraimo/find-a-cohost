
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Mic, Star, Calendar, MessageCircle } from "lucide-react";

interface CoHost {
  id: number;
  name: string;
  title: string;
  location: string;
  topics: string[];
  experience: string;
  shows: number;
  rating: number;
  availability: string;
  image: string;
  bio: string;
  equipment: string;
}

interface CoHostCardProps {
  coHost: CoHost;
}

export const CoHostCard = ({ coHost }: CoHostCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-purple-100 hover:border-purple-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-16 h-16 ring-2 ring-purple-100">
            <AvatarImage src={coHost.image} alt={coHost.name} />
            <AvatarFallback>{coHost.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-purple-600 transition-colors">
              {coHost.name}
            </h3>
            <p className="text-gray-600 text-sm mb-2">{coHost.title}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-4 h-4" />
              {coHost.location}
            </div>
          </div>
          <Badge 
            variant={coHost.availability === "Available" ? "default" : "secondary"}
            className={coHost.availability === "Available" ? "bg-green-100 text-green-800" : ""}
          >
            {coHost.availability}
          </Badge>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{coHost.bio}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {coHost.topics.slice(0, 3).map((topic) => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Mic className="w-4 h-4 text-purple-500" />
            <span>{coHost.shows} shows</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500" />
            <span>{coHost.rating}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>{coHost.experience}</span>
          </div>
          <div className="text-xs text-gray-500">
            {coHost.equipment}
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 bg-gradient-to-r from-[#663090] to-black text-white hover:from-[#552673] hover:to-gray-800">
            <MessageCircle className="w-4 h-4 mr-2" />
            Connect
          </Button>
          <Button variant="outline" size="sm" className="px-4">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
