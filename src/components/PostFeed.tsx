
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, MoreHorizontal, User } from "lucide-react";

const samplePosts = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
    time: "2 hours ago",
    content: "Just finished recording episode 50 of my tech podcast! Looking for a co-host who's passionate about AI and machine learning. Anyone interested? 🎙️ #podcast #AI #cohost",
    likes: 24,
    comments: 8,
    shares: 3,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=300&fit=crop"
  },
  {
    id: 2,
    author: "Mike Chen",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=100&h=100&fit=crop&crop=face",
    time: "4 hours ago",
    content: "Had an amazing recording session today with my new co-host found through FindACoHost! The chemistry is incredible and our audience is loving it. Highly recommend this platform! 🔥",
    likes: 42,
    comments: 15,
    shares: 7
  },
  {
    id: 3,
    author: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=100&h=100&fit=crop&crop=face",
    time: "6 hours ago",
    content: "Tips for first-time podcasters: 1) Invest in good audio equipment 2) Find your niche 3) Be consistent 4) Most importantly - find a co-host who complements your style! What would you add to this list?",
    likes: 56,
    comments: 23,
    shares: 12
  }
];

export const PostFeed = () => {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-6">
      {samplePosts.map((post) => (
        <Card key={post.id} className="shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.avatar} alt={post.author} />
                  <AvatarFallback className="bg-purple-100 text-purple-700">
                    <User className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">{post.author}</h3>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="w-5 h-5" />
              </Button>
            </div>

            {/* Post Content */}
            <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>

            {/* Post Image */}
            {post.image && (
              <div className="mb-4">
                <img 
                  src={post.image} 
                  alt="Post content" 
                  className="w-full rounded-lg object-cover"
                />
              </div>
            )}

            {/* Post Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-6">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center space-x-2 ${likedPosts.includes(post.id) ? 'text-red-500' : 'text-gray-500'} hover:text-red-500`}
                >
                  <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                  <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
                  <Share2 className="w-5 h-5" />
                  <span>{post.shares}</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
