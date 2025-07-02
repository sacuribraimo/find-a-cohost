import { Users, Search, MessageCircle, Podcast, UserPlus, Calendar, Shield } from "lucide-react";

export const HowItWorks = () => {
  const hostSteps = [
    {
      icon: Search,
      title: "Browse Guest Profiles",
      description: "Discover talented guests who match your podcast's theme and audience"
    },
    {
      icon: MessageCircle,
      title: "Connect & Chat",
      description: "Send messages to potential guests and discuss your show ideas"
    },
    {
      icon: Calendar,
      title: "Schedule Recording",
      description: "Set up recording sessions that work for both schedules"
    }
  ];

  const guestSteps = [
    {
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Showcase your expertise, experience, and what you bring to podcasts"
    },
    {
      icon: Users,
      title: "Get Discovered",
      description: "Podcast hosts will find you based on your skills and interests"
    },
    {
      icon: Podcast,
      title: "Join Shows",
      description: "Participate in engaging conversations and grow your audience"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're hosting a podcast or looking to be a guest, we make it simple to connect
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Hosts */}
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: '#663090'}}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">For Podcast Hosts</h3>
              <p className="text-gray-600">Find the perfect guests for your show</p>
            </div>
            <div className="space-y-6">
              {hostSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Guests */}
          <div>
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'linear-gradient(135deg, #663090 0%, #8B5A96 100%)'}}>
                <Podcast className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">For Podcast Guests</h3>
              <p className="text-gray-600">Share your expertise on amazing shows</p>
            </div>
            <div className="space-y-6">
              {guestSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="mt-16">
          <div className="rounded-2xl p-12" style={{backgroundColor: '#E0C9D8'}}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Privacy Is Our Top Priority</h3>
                </div>
                <div className="text-gray-800 leading-relaxed space-y-4">
                  <p>
                    We want to ensure you that your privacy is our top priority and reiterate that your information will only be shared with matches that you are interested in and approved to release your email address to.
                  </p>
                  <p>
                    At that point, we will make the warm introduction from an authorized email from Find a Co-Host™. You will not receive emails from other sources and should report them immediately.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop" 
                  alt="Secure digital privacy and data protection illustration"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
