
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Star, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🚀 Launch Your Tech Career
            </Badge>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Master 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> DevOps & DevSecOps </span>
              for Your Dream Job
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 sm:max-w-3xl">
              Transform your career with industry-leading DevOps and DevSecOps training. 
              Designed for students, graduates, and career switchers who want to break into high-demand tech roles.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-lg px-8 py-4">
                Enroll Now - Limited Seats
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-medium text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white"></div>
                  ))}
                </div>
                <span className="ml-3 text-sm text-gray-600">500+ successful careers launched</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="ml-1 text-sm text-gray-600">4.9/5 rating</span>
              </div>
            </div>
          </div>

          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full h-64 sm:h-72 object-cover"
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                  alt="DevOps Training"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium">Certified</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-2" />
                    <span className="text-sm font-medium">Live Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
