
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Image, Video, Mic, MapPin, User } from "lucide-react";

export const CreatePostForm = () => {
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    setIsPosting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Posted:", content);
      setContent("");
      setIsPosting(false);
    }, 1000);
  };

  return (
    <Card className="shadow-sm">
      <CardContent className="p-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" alt="You" />
              <AvatarFallback className="bg-purple-100 text-purple-700">
                <User className="w-5 h-5" />
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <Textarea
                placeholder="What's on your mind about podcasting?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border-0 resize-none text-lg placeholder-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                rows={3}
              />
              
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-4">
                  <Button type="button" variant="ghost" size="sm" className="text-gray-500 hover:text-purple-600">
                    <Image className="w-5 h-5 mr-1" />
                    Photo
                  </Button>
                  <Button type="button" variant="ghost" size="sm" className="text-gray-500 hover:text-purple-600">
                    <Video className="w-5 h-5 mr-1" />
                    Video
                  </Button>
                  <Button type="button" variant="ghost" size="sm" className="text-gray-500 hover:text-purple-600">
                    <Mic className="w-5 h-5 mr-1" />
                    Audio
                  </Button>
                  <Button type="button" variant="ghost" size="sm" className="text-gray-500 hover:text-purple-600">
                    <MapPin className="w-5 h-5 mr-1" />
                    Location
                  </Button>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={!content.trim() || isPosting}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  {isPosting ? "Posting..." : "Post"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
