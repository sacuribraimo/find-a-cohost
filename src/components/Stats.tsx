
import { Users, Podcast, Clock, Star } from "lucide-react";

export const Stats = () => {
  const stats = [
    { icon: Users, label: "Active Co-Hosts", value: "2,400+" },
    { icon: Podcast, label: "Shows Created", value: "850+" },
    { icon: Clock, label: "Hours Recorded", value: "12,000+" },
    { icon: Star, label: "Success Rate", value: "94%" },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-900 via-[#663090] to-purple-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/30">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
