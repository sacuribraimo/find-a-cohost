
import { AlertTriangle, X, RefreshCw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const NotCompatible = () => {
  const incompatibleSigns = [
    {
      icon: X,
      title: "Mismatched Schedules",
      description: "Can't align recording times"
    },
    {
      icon: AlertTriangle,
      title: "Different Goals",
      description: "Conflicting podcast visions"
    },
    {
      icon: RefreshCw,
      title: "Poor Chemistry",
      description: "Awkward conversation flow"
    }
  ];

  const solutions = [
    "Smart matching algorithm",
    "Schedule compatibility check",
    "Communication style assessment",
    "Goal alignment verification"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            Avoid Compatibility Issues
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            When Co-Hosts Are{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Not Compatible
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't let a bad match ruin your podcast dreams. Learn the warning signs 
            and discover how our platform prevents compatibility disasters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Problem Illustration */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform -rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop" 
                alt="Frustrated person at computer"
                className="w-full h-48 object-cover rounded-lg mb-6 grayscale"
              />
              
              <div className="space-y-4">
                {incompatibleSigns.map((sign, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <sign.icon className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{sign.title}</h4>
                      <p className="text-sm text-gray-600">{sign.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Warning indicators */}
            <div className="absolute -top-2 -right-2 bg-red-500 rounded-full p-2 shadow-lg animate-pulse">
              <X className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Right - Solutions */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Our Solution: Smart Compatibility Matching
              </h3>
              <p className="text-gray-600">
                We use advanced algorithms and compatibility assessments to ensure 
                you only connect with co-hosts who truly complement your style and goals.
              </p>
            </div>

            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{solution}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-2">Success Guarantee</h4>
              <p className="mb-4 opacity-90">
                95% of our matches result in successful long-term partnerships. 
                If you're not satisfied, we'll find you a new match for free.
              </p>
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
