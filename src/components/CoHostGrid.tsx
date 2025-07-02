
import { CoHostCard } from "./CoHostCard";

export const CoHostGrid = () => {
  const coHosts = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Tech Entrepreneur & Podcaster",
      location: "San Francisco, CA",
      topics: ["Technology", "Startups", "AI"],
      experience: "3 years",
      shows: 5,
      rating: 4.9,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Former Silicon Valley exec turned podcast host. Love discussing the intersection of tech and society.",
      equipment: "Professional studio setup"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Business Coach & Speaker",
      location: "New York, NY",
      topics: ["Business", "Leadership", "Motivation"],
      experience: "5 years",
      shows: 12,
      rating: 4.8,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Helping entrepreneurs build successful businesses. Passionate about sharing actionable insights.",
      equipment: "Home studio with pro gear"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Health & Wellness Expert",
      location: "Los Angeles, CA",
      topics: ["Health", "Wellness", "Nutrition"],
      experience: "4 years",
      shows: 8,
      rating: 4.9,
      availability: "Busy",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Medical doctor and wellness advocate. Making health topics accessible and engaging for everyone.",
      equipment: "Mobile recording setup"
    },
    {
      id: 4,
      name: "Alex Thompson",
      title: "Comedy Writer & Performer",
      location: "Chicago, IL",
      topics: ["Comedy", "Entertainment", "Pop Culture"],
      experience: "6 years",
      shows: 15,
      rating: 4.7,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Stand-up comedian and comedy writer. Bring humor and levity to any conversation.",
      equipment: "Professional home studio"
    },
    {
      id: 5,
      name: "Jennifer Kim",
      title: "Finance & Investment Advisor",
      location: "Austin, TX",
      topics: ["Finance", "Investing", "Economics"],
      experience: "7 years",
      shows: 20,
      rating: 4.9,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "CPA and investment advisor helping people build wealth. Complex topics made simple.",
      equipment: "Broadcast quality setup"
    },
    {
      id: 6,
      name: "David Park",
      title: "Sports Analyst & Former Athlete",
      location: "Miami, FL",
      topics: ["Sports", "Fitness", "Athletics"],
      experience: "2 years",
      shows: 4,
      rating: 4.6,
      availability: "Available",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Former professional athlete turned sports analyst. Passionate about athletic performance.",
      equipment: "Basic recording setup"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {coHosts.map((coHost) => (
        <CoHostCard key={coHost.id} coHost={coHost} />
      ))}
    </div>
  );
};
